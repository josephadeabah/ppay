class Api::V1::InflationController < ApplicationController
    def index
      @regions = Region.includes(countries: :categories)
      render json: @regions, each_serializer: RegionSerializer
    end
  end
  