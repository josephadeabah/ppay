module Api
    module V1
      class LaborOrganizationsController < ApplicationController
        before_action :set_labor_organization, only: [:show, :update, :destroy]
        before_action :authenticate_request!
  
        def create
          labor_organization = LaborOrganization.new(labor_organization_params)
          if labor_organization.save
            render json: { status: 'Labor organization created successfully' }, status: :created
          else
            render json: { errors: labor_organization.errors.full_messages }, status: :unprocessable_entity
          end
        end
  
        def index
          labor_organizations = LaborOrganization.all
          render json: labor_organizations
        end
  
        def show
          render json: @labor_organization
        end
  
        def update
          if @labor_organization.update(labor_organization_params)
            render json: { status: 'Labor organization updated successfully' }
          else
            render json: { errors: @labor_organization.errors.full_messages }, status: :unprocessable_entity
          end
        end
  
        def destroy
          @labor_organization.destroy
          render json: { status: 'Labor organization deleted successfully' }
        end
  
        private
  
        def set_labor_organization
          @labor_organization = LaborOrganization.find(params[:id])
        end
  
        def labor_organization_params
          params.require(:labor_organization).permit(:name, :email, :role)
        end
      end
    end
  end
  