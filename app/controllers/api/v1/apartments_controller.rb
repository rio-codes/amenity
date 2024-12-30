module Api
    module V1
        class ApartmentsController < ApplicationController
            before_action :set_apartment, only: [:show, :update, :destroy]
    
            # POST /api/v1/apartments
            def create
                apartment = Apartment.new(apartment_params)
        
                if apartment.save
                    render json: apartment, status: :created
                else
                    render json: { error: apartment.errors.full_messages }, status: :unprocessable_entity
                end
            end
    
            # GET /api/v1/apartments/:id
            def show
                render json: @apartment
            end
    
            # PUT /api/v1/apartments/:id
            def update
                if @apartment.update(apartment_params)
                    render json: @apartment
                else
                    render json: { error: @apartment.errors.full_messages }, status: :unprocessable_entity
                end
            end
    
            # DELETE /api/v1/apartments/:id
            def destroy
                @apartment.destroy
                head :no_content
            end
    
            private
    
            def set_apartment
                @apartment = Apartment.find(params[:id])
            end
    
            def apartment_params
                params.require(:apartment).permit(:name, :description, :user_id)
            end
        end
    end
end