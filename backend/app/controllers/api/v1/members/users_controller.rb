module Api
    module V1
      module Members
        class UsersController < ApplicationController
          before_action :authenticate_request, except: [:index]  # Skip authentication for index action
          before_action :authorize_admin, only: [:make_admin]
          before_action :set_user, only: [:change_password, :make_admin]
  
          # GET /api/v1/members/users        
        def index
          @users = User.includes(:profile).all
          render json: @users.to_json(include: :profile), status: :ok
        end
  
          # GET /api/v1/members/users/me
          # GET /api/v1/members/users/:id
          def show
            render json: @current_user.as_json(include: :profile), status: :ok
          end

        # PUT /api/v1/members/users/:id/make_admin
        def make_admin
          admin_status = params[:admin] == "true"
          if @user.update(admin: admin_status)
            render json: @user.as_json(include: :profile), status: :ok
          else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
          end
        end
  
          # PUT /api/v1/members/users/me
          def update
            if @current_user.update(user_params)
              render json: @current_user.as_json(include: :profile), status: :ok
            else
              render json: { errors: @current_user.errors.full_messages }, status: :unprocessable_entity
            end
          end
          
  
          # PUT /api/v1/members/users/me/password
          def change_password
            if @user.authenticate(params[:current_password]) && @user.update(password_params)
              render json: { message: 'Password updated successfully' }, status: :ok
            else
              render json: { error: 'Current password is incorrect or new password is invalid' }, status: :unprocessable_entity
            end
          end
  
          private
  
          def set_user
            @user = User.includes(:profile).find(params[:id])
          rescue ActiveRecord::RecordNotFound
            render json: { error: 'User not found' }, status: :not_found
          end
  
          def user_params
            params.require(:user).permit(:email, :password, :password_confirmation, :admin, profile_attributes: [:name, :role, :status, :salary_role, :experience, :country, :industry, :category, :company, :actual_salary, :job_website, :avatar])
          end
  
          def password_params
            params.require(:user).permit(:password, :password_confirmation)
          end
        end
      end
    end
  end
  