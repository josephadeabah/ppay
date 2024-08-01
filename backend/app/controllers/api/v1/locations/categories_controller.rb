module Api
  module V1
    module Locations
    class CategoriesController < ApplicationController
      before_action :authenticate_request  # Ensure the user is authenticated
      before_action :set_category, only: [:show, :update, :destroy]

      def index
        @categories = Category.all
        render json: @categories, each_serializer: CategorySerializer
      end

      def show
        render json: @category, serializer: CategorySerializer
      end

      def create
        @category = Category.new(category_params)
        if @category.save
          render json: @category, status: :created, serializer: CategorySerializer
        else
          render json: { errors: format_errors(@category.errors) }, status: :unprocessable_entity
        end
      end

      def update
        if @category.update(category_params)
          render json: @category, serializer: CategorySerializer
        else
          render json: { errors: format_errors(@category.errors) }, status: :unprocessable_entity
        end
      end

      def destroy
        @category.destroy
        head :no_content
      end

      private

      def set_category
        @category = Category.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        render json: { error: 'Category not found' }, status: :not_found
      end

      def category_params
        params.require(:category).permit(:name, :inflation_rate, :country_id)
      end

      def format_errors(errors)
        errors.full_messages.join(', ')
      end
    end
  end
  end
end
