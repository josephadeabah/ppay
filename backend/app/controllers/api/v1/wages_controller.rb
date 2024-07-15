module Api
  module V1
    class WagesController < ApplicationController
      before_action :set_wage, only: [:show, :update, :destroy]
      before_action :authenticate_request!
      before_action :authorize_user!, except: [:index, :show]

      def index
        wages = Wage.all
        render json: wages
      end

      def show
        render json: @wage
      end

      def create
        wage = Wage.new(wage_params)
        if wage.save
          render json: { status: 'Wage created successfully' }, status: :created
        else
          render json: { errors: wage.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def update
        if @wage.update(wage_params)
          render json: { status: 'Wage updated successfully' }
        else
          render json: { errors: @wage.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        @wage.destroy
        render json: { status: 'Wage deleted successfully' }
      end

      private

      def set_wage
        @wage = Wage.find(params[:id])
      end

      def wage_params
        params.require(:wage).permit(:job_title, :location, :wage)
      end

      def authorize_user!
        render json: { errors: 'Unauthorized' }, status: :unauthorized unless @current_user.admin? || @current_user == @wage.user
      end
    end
  end
end
