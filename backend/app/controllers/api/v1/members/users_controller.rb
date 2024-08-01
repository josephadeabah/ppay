module Api
    module V1
      module Members
        class UsersController < ApplicationController
          before_action :authenticate_request, except: [:index]  # Skip authentication for index action
          before_action :set_user, only: [:show, :update, :change_password]
  
          # GET /api/v1/members/users
          def index
            @users = User.all
            render json: @users, status: :ok
          end
  
          # GET /api/v1/members/users/:id
          def show
            render json: @user, status: :ok
          end
  
          # PUT /api/v1/members/users/me
          def update
            if @user.update(user_params)
              render json: @user, status: :ok
            else
              render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
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
            @user = User.find(params[:id])
          rescue ActiveRecord::RecordNotFound
            render json: { error: 'User not found' }, status: :not_found
          end
  
          def user_params
            params.require(:user).permit(:email)
          end
  
          def password_params
            params.require(:user).permit(:password, :password_confirmation)
          end
        end
      end
    end
  end
  