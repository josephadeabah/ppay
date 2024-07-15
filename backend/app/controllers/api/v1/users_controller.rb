module Api
  module V1
    class UsersController < ApplicationController
      before_action :set_user, only: [:show, :update, :destroy]
      before_action :authenticate_request!, except: [:create, :login]
      before_action :set_user, only: [:show, :update, :destroy]
      before_action :authenticate_admin!, only: [:index, :destroy]
      before_action :authenticate_user!, only: [:show, :update]

      def create
        user = User.new(user_params)
        if user.save
          render json: { status: 'User created successfully' }, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def login
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
          render json: { token: generate_token(user.id) }, status: :ok
        else
          render json: { errors: 'Invalid email or password' }, status: :unauthorized
        end
      end

      def index
        users = User.all
        render json: users
      end

      def show
        render json: @user
      end

      def update
        if @user.update(user_params)
          render json: { status: 'User updated successfully' }
        else
          render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        @user.destroy
        render json: { status: 'User deleted successfully' }
      end

      private

      def set_user
        @user = User.find(params[:id])
      end

      def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
      end

      def authenticate_admin!
        render json: { errors: 'Unauthorized' }, status: :unauthorized unless @current_user.admin?
      end

      def authenticate_user!
        render json: { errors: 'Unauthorized' }, status: :unauthorized unless @current_user == @user
      end

      def generate_token(user_id)
        JWT.encode({ user_id: user_id, exp: 24.hours.from_now.to_i }, Rails.application.secret_key_base)
      end
    end
  end
end
