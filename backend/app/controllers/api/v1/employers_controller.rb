module Api
    module V1
      class EmployersController < ApplicationController
        before_action :set_employer, only: [:show, :update, :destroy]
        before_action :authenticate_request!
        before_action :authorize_access!, except: [:index, :show]

  
        def create
          employer = Employer.new(employer_params)
          if employer.save
            render json: { status: 'Employer created successfully' }, status: :created
          else
            render json: { errors: employer.errors.full_messages }, status: :unprocessable_entity
          end
        end
  
        def index
          employers = Employer.all
          render json: employers
        end
  
        def show
          render json: @employer
        end
  
        def update
          if @employer.update(employer_params)
            render json: { status: 'Employer updated successfully' }
          else
            render json: { errors: @employer.errors.full_messages }, status: :unprocessable_entity
          end
        end
  
        def destroy
          @employer.destroy
          render json: { status: 'Employer deleted successfully' }
        end
  
        private
  
        def set_employer
          @employer = Employer.find(params[:id])
        end
  
        def employer_params
          params.require(:employer).permit(:name, :email, :role)
        end

        def authorize_access!
          render json: { errors: 'Unauthorized' }, status: :unauthorized unless @current_user.admin? || @current_user == @employer.user
        end
      end
    end
  end
