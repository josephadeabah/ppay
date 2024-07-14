module Api
  module V1
    class TransactionsController < ApplicationController
      before_action :authenticate_request!

      def create
        receiver = User.find_by(email: transaction_params[:receiver_email])
        if receiver
          amount = transaction_params[:amount].to_f
          if transaction_params[:currency] != 'USD'
            amount = CurrencyConversionService.convert(amount, transaction_params[:currency], 'USD')
          end
          transaction = @current_user.sent_transactions.build(
            amount: amount,
            currency: transaction_params[:currency],
            status: 'pending',
            receiver: receiver
          )
          if transaction.save
            # Update sender and receiver balances
            ActiveRecord::Base.transaction do
              @current_user.update!(balance: @current_user.balance - amount)
              receiver.update!(balance: receiver.balance + amount)
            end
            render json: transaction, status: :created
          else
            render json: { errors: transaction.errors.full_messages }, status: :unprocessable_entity
          end
        else
          render json: { errors: 'Receiver not found' }, status: :not_found
        end
      end

      def index
        transactions = @current_user.sent_transactions + @current_user.received_transactions
        render json: transactions, status: :ok
      end

      def balance
        render json: { balance: @current_user.balance, currency: @current_user.currency }
      end

      def detect_fraud
        transaction = Transaction.find_by(id: params[:transaction_id])
        if transaction
          if fraud_detected?(transaction)
            render json: { fraud_detected: true, message: 'Fraud detected for this transaction' }
          else
            render json: { fraud_detected: false, message: 'Transaction is valid' }
          end
        else
          render json: { error: 'Invalid transaction_id' }, status: :unprocessable_entity
        end
      end

      private

      def transaction_params
        params.require(:transaction).permit(:amount, :currency, :receiver_email)
      end

      def fraud_detected?(transaction)
        # Implement your fraud detection logic here
        # Example: Check transaction amount, recipient history, etc.
        false # Placeholder for demonstration
      end
    end
  end
end
