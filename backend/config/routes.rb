Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      post 'login', to: 'users#login'

      resources :transactions, only: [:create, :index]
      get 'account/balance', to: 'transactions#balance'
      post 'transactions/detect-fraud', to: 'transactions#detect_fraud'
    end
  end
end
