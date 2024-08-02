module Api
  module V1
    module Paytrend
            class PayTrendsController < ApplicationController
              before_action :authenticate_request, except: [:index]
              before_action :authorize_admin, only: [:create, :update, :destroy]
              before_action :set_pay_trend, only: [:update, :destroy]

              # GET /api/v1/members/pay_trends
        def index
          @pay_trends = PayTrend.all
          render json: @pay_trends, status: :ok
        end

        # POST /api/v1/members/pay_trends
        def create
          @pay_trend = PayTrend.new(pay_trend_params)
          if @pay_trend.save
            render json: @pay_trend, status: :created
          else
            render json: { errors: @pay_trend.errors.full_messages }, status: :unprocessable_entity
          end
        end

        # PUT /api/v1/members/pay_trends/:id
        def update
          if @pay_trend.update(pay_trend_params)
            render json: @pay_trend, status: :ok
          else
            render json: { errors: @pay_trend.errors.full_messages }, status: :unprocessable_entity
          end
        end

        # DELETE /api/v1/members/pay_trends/:id
        def destroy
          @pay_trend.destroy
          head :no_content
        end

        private

        def set_pay_trend
          @pay_trend = PayTrend.find(params[:id])
        rescue ActiveRecord::RecordNotFound
          render json: { error: 'PayTrend not found' }, status: :not_found
        end

        def pay_trend_params
          params.require(:pay_trend).permit(:country, :industry, :company, :role, :currentSalaryByCompany, :currentSalaryByRole, :change, :changeTimeframe, :benefits)
        end
      end
    end
  end
end
