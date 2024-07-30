module Api
    module V1
      class CategoriesController < ApplicationController
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
            render json: @category.errors, status: :unprocessable_entity
          end
        end
  
        def update
          if @category.update(category_params)
            render json: @category, serializer: CategorySerializer
          else
            render json: @category.errors, status: :unprocessable_entity
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
      end
    end
  end
  