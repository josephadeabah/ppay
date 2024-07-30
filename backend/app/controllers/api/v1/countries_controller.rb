module Api
    module V1
      class CountriesController < ApplicationController
        before_action :set_country, only: [:show, :update, :destroy]
  
        def index
          @countries = Country.includes(:categories).all
          render json: @countries, each_serializer: CountrySerializer
        end
  
        def show
          render json: @country, serializer: CountrySerializer
        end
  
        def create
          @country = Country.new(country_params)
          if @country.save
            render json: @country, status: :created, serializer: CountrySerializer
          else
            render json: @country.errors, status: :unprocessable_entity
          end
        end
  
        def update
          if @country.update(country_params)
            render json: @country, serializer: CountrySerializer
          else
            render json: @country.errors, status: :unprocessable_entity
          end
        end
  
        def destroy
          @country.destroy
          head :no_content
        end
  
        private
  
        def set_country
          @country = Country.find(params[:id])
        rescue ActiveRecord::RecordNotFound
          render json: { error: 'Country not found' }, status: :not_found
        end
  
        def country_params
          params.require(:country).permit(:name, :overall_inflation_rate, :region_id)
        end
      end
    end
  end
  