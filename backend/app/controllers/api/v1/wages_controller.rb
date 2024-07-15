module Api
    module V1
      class WagesController < ApplicationController
        before_action :authenticate_request!
  
        def index
          wages = Wage.all
          render json: wages
        end
  
        def show
          wage = Wage.find(params[:id])
          render json: wage
        end
  
        def create
          wage = Wage.new(wage_params)
          wage.user = @current_user
          if wage.save
            render json: wage, status: :created
          else
            render json: { errors: wage.errors.full_messages }, status: :unprocessable_entity
          end
        end
  
        private
  
        def wage_params
          params.require(:wage).permit(:job_title, :location, :wage)
        end
      end
    end
  end
  