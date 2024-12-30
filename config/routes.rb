Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :show, :update, :destroy] do
        member do
          put 'move_in_date', to: 'users#update_move_in_date'
        end
      end
      post 'auth/register', to: 'auth#register' # Add this line to handle user registration
      post 'auth/login', to: 'auth#login'
      get 'auth/auto_login', to: 'auth#auto_login'
      get 'auth/user', to: 'auth#user'
      resources :apartments, only: [:create, :show, :update, :destroy]
    end
  end

  root 'home#index'
  get '/*path', to: 'home#index', constraints: ->(req) { !req.path.match(%r{^/api}) }
end