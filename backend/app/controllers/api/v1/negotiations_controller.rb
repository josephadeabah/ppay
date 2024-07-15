module Api
  module V1
    class NegotiationsController < ApplicationController
      before_action :set_negotiation, only: [:show, :update, :destroy]
      before_action :authenticate_request!
      before_action :authorize_user!, except: [:index, :show]

      def index
        negotiations = Negotiation.all
        render json: negotiations
      end

      def show
        render json: @negotiation
      end

      def create
        negotiation = Negotiation.new(negotiation_params)
        negotiation.user = @current_user # Assign current user to the negotiation
        if negotiation.save
          render json: { status: 'Negotiation created successfully' }, status: :created
        else
          render json: { errors: negotiation.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def update
        if @negotiation.update(negotiation_params)
          render json: { status: 'Negotiation updated successfully' }
        else
          render json: { errors: @negotiation.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        @negotiation.destroy
        render json: { status: 'Negotiation deleted successfully' }
      end

      private

      def set_negotiation
        @negotiation = Negotiation.find(params[:id])
      end

      def negotiation_params
        params.require(:negotiation).permit(:details)
      end

      def authorize_user!
        render json: { errors: 'Unauthorized' }, status: :unauthorized unless @current_user.admin? || @current_user == @negotiation.user
      end
    end
  end
end
