module Api
    module V1
        class UsersController < ApplicationController
            before_action :set_user, only: [:show, :update, :destroy, :update_move_in_date]
            before_action :authorize_request, except: :create

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

            # PUT /api/v1/users/:id/move_in_date
            def update_move_in_date
                if @user.update(move_in_date: params[:move_in_date])
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

            # POST /api/v1/auth/login
            def login
                user = User.find_by(email: params[:email])
                if user && user.authenticate(params[:password])
                    token = encode_token(user_id: user.id)
                    render json: { token: token }, status: :ok
                else
                    render json: { error: 'Invalid email or password' }, status: :unauthorized
                end
            end

            # GET /api/v1/auth/auto_login
            def auto_login
                user = current_user
                if user
                    render json: user
                else
                    render json: { error: 'No user logged in' }, status: :unauthorized
                end
            end
            
            private
    
            def set_user
                @user = User.find(params[:id])
            end

            def user_params
                params.require(:user).permit(:email, :password, :move_in_date)
            end

            def authorize_request
                header = request.headers['Authorization']
                header = header.split(' ').last if header
                decoded = JsonWebToken.decode(header)
                @current_user = User.find(decoded[:user_id])
            rescue ActiveRecord::RecordNotFound => e
                render json: { errors: e.message }, status: :unauthorized
            rescue JWT::DecodeError => e
                render json: { errors: e.message }, status: :unauthorized
            end

            def current_user
                @current_user
            end
        end
    end
end