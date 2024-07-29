Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # Inflation routes
      resources :inflation, only: [:index]
    end
  end
end
