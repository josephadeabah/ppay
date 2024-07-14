class TransactionsController < ApplicationController
    before_action :authenticate_request!
  
    def create
      receiver = User.find_by(email: transaction_params[:receiver_email])
      if receiver
        transaction = @current_user.sent_transactions.build(
          amount: transaction_params[:amount],
          currency: transaction_params[:currency],
          status: 'pending',
          receiver: receiver
        )
        if transaction.save
          render json: transaction, status: :created
        else
          render json: { errors: transaction.errors.full_messages }, status: :unprocessable_entity
        end
      else
        render json: { errors: 'Receiver not found' }, status: :not_found
      end
    end
  
    def index
      transactions = @current_user.transactions
      render json: transactions, status: :ok
    end
  
    private
  
    def transaction_params
      params.require(:transaction).permit(:amount, :currency, :receiver_email)
    end
  end
  