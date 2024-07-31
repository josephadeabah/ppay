module Api
  module V1
    class RegionsController < ApplicationController
      before_action :set_region, only: [:show, :update, :destroy]

      def index
        @regions = Region.includes(countries: :categories).all
        render json: @regions, each_serializer: RegionSerializer
      end

      def show
        render json: @region, serializer: RegionSerializer
      end

      def create
        @region = Region.new(region_params)
        if @region.save
          render json: @region, status: :created, serializer: RegionSerializer
        else
          render json: { errors: format_errors(@region.errors) }, status: :unprocessable_entity
        end
      end

      def update
        if @region.update(region_params)
          render json: @region, serializer: RegionSerializer
        else
          render json: { errors: format_errors(@region.errors) }, status: :unprocessable_entity
        end
      end

      def destroy
        @region.destroy
        head :no_content
      end

      private

      def set_region
        @region = Region.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        render json: { error: 'Region not found' }, status: :not_found
      end

      def region_params
        params.require(:region).permit(:name)
      end

      def format_errors(errors)
        errors.full_messages.join(', ')
      end
    end
  end
end
