module Api
    module V1
      class PostsController < ApplicationController
        before_action :authenticate_request!, only: [:create]
  
        def create
          forum = Forum.find(params[:forum_id])
          post = forum.posts.build(post_params.merge(user: @current_user))
          if post.save
            render json: post, status: :created
          else
            render json: { errors: post.errors.full_messages }, status: :unprocessable_entity
          end
        end
  
        private
  
        def post_params
          params.require(:post).permit(:content)
        end
      end
    end
  end
  