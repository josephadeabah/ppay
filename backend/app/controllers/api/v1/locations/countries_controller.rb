module Api
  module V1
    module Locations
    class CountriesController < ApplicationController
      before_action :authenticate_request  # Ensure the user is authenticated
      before_action :set_country, only: [:show, :update, :destroy]

      def index
        @countries = Country.includes(:categories).all
        render json: @countries, each_serializer: CountrySerializer
      end

      def show
        render json: @country, serializer: CountrySerializer
      end

      def create
        begin
          @country = Country.create!(country_params)
          render json: @country, status: :created, serializer: CountrySerializer
        rescue ActiveRecord::RecordNotUnique
          render json: { error: 'Country with this name already exists in the specified region.' }, status: :unprocessable_entity
        rescue ActiveRecord::RecordInvalid => e
          render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def update
        if @country.update(country_params)
          render json: @country, serializer: CountrySerializer
        else
          render json: { errors: format_errors(@country.errors) }, status: :unprocessable_entity
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

      def format_errors(errors)
        errors.full_messages.join(', ')
      end
    end
  end
end
end
