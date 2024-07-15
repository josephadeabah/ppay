# app/controllers/api/v1/data_visualization_controller.rb
module Api
    module V1
      class DataVisualizationController < ApplicationController
        def wage_disparities
          # Example: Fetch data to calculate wage disparities
          # Replace with your actual logic to fetch and calculate data
          data = {
            labels: ['Developed Countries', 'Developing Countries'],
            datasets: [
              {
                label: 'Average Wage',
                data: [60000, 25000] # Example average wages for illustration
              }
            ]
          }
  
          render json: data, status: :ok
        end
      end
    end
  end
  