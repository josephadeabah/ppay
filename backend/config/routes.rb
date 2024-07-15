Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # User routes
      resources :users, only: [:create]
      post 'login', to: 'users#login'
      
      # Wage routes
      resources :wages, only: [:index, :show, :create]

      # Negotiation routes
      resources :negotiations, only: [:index, :show, :create]

      # Forum routes
      resources :forums, only: [:index, :show, :create] do
        resources :posts, only: [:create]
      end

      # Pay Equity Calculator route
      post 'pay_equity_calculator', to: 'pay_equity_calculator#calculate'

      # Additional routes for interactions
      resources :negotiators, only: [:index, :show]
      resources :labor_organizations, only: [:index, :show]
      resources :admins, only: [:index, :show]
      resources :employers, only: [:index, :show]
    end
  end
end
