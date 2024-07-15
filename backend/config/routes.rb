Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # New route for creating a user
      resources :users, only: [:create, :show, :update, :destroy]
      post 'register', to: 'users#create'

      # Route for fetching all users (not protected)
      get 'allusers', to: 'users#index'

      put '/users/:id', to: 'users#update'
      patch '/users/:id', to: 'users#update'
      get '/users/:id', to: 'users#show'
      delete '/users/:id', to: 'users#destroy'
      # Login route
      post 'login', to: 'users#login'

      # Other existing routes remain unchanged

      # Wage routes
      resources :wages, only: [:index, :show, :create, :update, :destroy]

      # Negotiation routes
      resources :negotiations, only: [:index, :show, :create, :update, :destroy]

      # Forum routes
      resources :forums, only: [:index, :show, :create, :update, :destroy] do
        resources :posts, only: [:create, :update, :destroy]
      end

      # Pay Equity Calculator route
      post 'pay_equity_calculator', to: 'pay_equity_calculator#calculate'

      # Additional routes for interactions
      resources :negotiators, only: [:index, :show, :update, :destroy]
      resources :labor_organizations, only: [:index, :show, :update, :destroy]
      resources :admins, only: [:index, :show, :update, :destroy]
      resources :employers, only: [:index, :show, :update, :destroy]
    end
  end
end
