module Api
    module V1
      class RegionsController < ApplicationController
        def index
          @regions = Region.includes(countries: :categories).all
          render json: @regions, each_serializer: RegionSerializer
        end
  
        def show
          @region = Region.find(params[:id])
          render json: @region, serializer: RegionSerializer
        end
  
        def create
          @region = Region.new(region_params)
          if @region.save
            render json: @region, status: :created, serializer: RegionSerializer
          else
            render json: @region.errors, status: :unprocessable_entity
          end
        end
  
        def update
          @region = Region.find(params[:id])
          if @region.update(region_params)
            render json: @region, serializer: RegionSerializer
          else
            render json: @region.errors, status: :unprocessable_entity
          end
        end
  
        def destroy
          @region = Region.find(params[:id])
          @region.destroy
          head :no_content
        end
  
        private
  
        def region_params
          params.require(:region).permit(:name)
        end
      end
    end
end
  