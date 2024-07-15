module Api
    module V1
      class ForumsController < ApplicationController
        before_action :authenticate_request!, only: [:create, :update, :destroy]
  
        def index
          forums = Forum.all
          render json: forums, status: :ok
        end
  
        def show
          forum = Forum.find(params[:id])
          render json: forum, include: :posts, status: :ok
        end
  
        def create
          forum = Forum.new(forum_params)
          if forum.save
            render json: forum, status: :created
          else
            render json: { errors: forum.errors.full_messages }, status: :unprocessable_entity
          end
        end
  
        private
  
        def forum_params
          params.require(:forum).permit(:name)
        end
      end
    end
  end
  