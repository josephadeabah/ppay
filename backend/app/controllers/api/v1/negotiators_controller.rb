module Api
    module V1
      class NegotiatorsController < ApplicationController
        before_action :set_negotiator, only: [:show, :update, :destroy]
        before_action :authenticate_request!
        before_action :authorize_access!, except: [:index, :show]

  
        def create
          negotiator = Negotiator.new(negotiator_params)
          if negotiator.save
            render json: { status: 'Negotiator created successfully' }, status: :created
          else
            render json: { errors: negotiator.errors.full_messages }, status: :unprocessable_entity
          end
        end
  
        def index
          negotiators = Negotiator.all
          render json: negotiators
        end
  
        def show
          render json: @negotiator
        end
  
        def update
          if @negotiator.update(negotiator_params)
            render json: { status: 'Negotiator updated successfully' }
          else
            render json: { errors: @negotiator.errors.full_messages }, status: :unprocessable_entity
          end
        end
  
        def destroy
          @negotiator.destroy
          render json: { status: 'Negotiator deleted successfully' }
        end
  
        private
  
        def set_negotiator
          @negotiator = Negotiator.find(params[:id])
        end
  
        def negotiator_params
          params.require(:negotiator).permit(:name, :email, :role)
        end

        def authorize_access!
          render json: { errors: 'Unauthorized' }, status: :unauthorized unless @current_user.admin? || @current_user == @negotiator.user
        end
      end
    end
  end
  