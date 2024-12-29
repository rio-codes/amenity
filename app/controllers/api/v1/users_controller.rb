module Api
    module V1
        class UsersController < ApplicationController
            before_action :set_user, only: [:show, :update, :destroy]
    
            # POST /api/v1/users
            def create
                user = User.new(user_params)
        
                if User.exists?(email: user_params[:email])
                    render json: { error: 'Email is already taken' }, status: :unprocessable_entity
                elsif user.save
                    token = encode_token(user_id: user.id)
                    render json: { token: token, user: user }, status: :created
                else
                    render json: { error: user.errors.full_messages }, status: :unprocessable_entity
                end
            end
    
            # GET /api/v1/users/:id
            def show
            render json: @user
            end
    
            # PUT /api/v1/users/:id
            def update
            if @user.update(user_params)
                render json: @user
            else
                render json: { error: @user.errors.full_messages }, status: :unprocessable_entity
            end
            end
    
            # DELETE /api/v1/users/:id
            def destroy
            @user.destroy
            head :no_content
            end
    
            private
    
            def set_user
            @user = User.find(params[:id])
            end
    
            def user_params
            params.require(:user).permit(:email, :password, :move_in_date)
            end
        end
    end
end