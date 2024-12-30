require Rails.root.join('lib/json_web_token')

module Api
    module V1
        class AuthController < ApplicationController
            before_action :authorize_request, except: [:login, :register]

            # POST /api/v1/auth/register
            def register
                user = User.new(user_params)
                if user.save
                    token = JsonWebToken.encode(user_id: user.id)
                    render json: { token: token }, status: :created
                else
                    render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
                end
            end

            # POST /api/v1/auth/login
            def login
                user = User.find_by(email: params[:email])
                if user && user.authenticate(params[:password])
                    token = JsonWebToken.encode(user_id: user.id)
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

            # GET /api/v1/auth/user
            def user
                user = current_user
                if user
                    render json: user
                else
                    render json: { error: 'No user logged in' }, status: :unauthorized
                end
            end

            private

            def authorize_request
                header = request.headers['Authorization']
                header = header.split(' ').last if header
                begin
                    decoded = JsonWebToken.decode(header)
                    @current_user = User.find(decoded[:user_id])
                rescue ActiveRecord::RecordNotFound => e
                    render json: { errors: e.message }, status: :unauthorized
                rescue JWT::DecodeError => e
                    render json: { errors: e.message }, status: :unauthorized
                end
            end

            def current_user
                @current_user
            end

            def user_params
                params.permit(:name, :email, :password, :password_confirmation)
            end
        end
    end
end