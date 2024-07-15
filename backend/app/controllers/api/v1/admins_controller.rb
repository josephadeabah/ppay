module Api
    module V1
      class AdminsController < ApplicationController
        before_action :set_admin, only: [:show, :update, :destroy]
        before_action :authenticate_request!
        before_action :authorize_admin!, except: [:index, :show]

  
        def create
          admin = Admin.new(admin_params)
          if admin.save
            render json: { status: 'Admin created successfully' }, status: :created
          else
            render json: { errors: admin.errors.full_messages }, status: :unprocessable_entity
          end
        end
  
        def index
          admins = Admin.all
          render json: admins
        end
  
        def show
          render json: @admin
        end
  
        def update
          if @admin.update(admin_params)
            render json: { status: 'Admin updated successfully' }
          else
            render json: { errors: @admin.errors.full_messages }, status: :unprocessable_entity
          end
        end
  
        def destroy
          @admin.destroy
          render json: { status: 'Admin deleted successfully' }
        end
  
        private
  
        def set_admin
          @admin = Admin.find(params[:id])
        end
  
        def admin_params
          params.require(:admin).permit(:name, :email, :role)
        end

        def authorize_admin!
          render json: { errors: 'Unauthorized' }, status: :unauthorized unless @current_user.admin?
        end
      end
    end
  end