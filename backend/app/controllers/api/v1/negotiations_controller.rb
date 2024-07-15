module Api
    module V1
      class NegotiationsController < ApplicationController
        before_action :authenticate_request!
  
        def index
          negotiations = Negotiation.all
          render json: negotiations
        end
  
        def show
          negotiation = Negotiation.find(params[:id])
          render json: negotiation
        end
  
        def create
          negotiation = Negotiation.new(negotiation_params)
          negotiation.user = @current_user
          if negotiation.save
            render json: negotiation, status: :created
          else
            render json: { errors: negotiation.errors.full_messages }, status: :unprocessable_entity
          end
        end
  
        private
  
        def negotiation_params
          params.require(:negotiation).permit(:details)
        end
      end
    end
  end
  