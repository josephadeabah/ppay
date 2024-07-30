Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :regions
      resources :countries
      resources :categories
    end
  end
end
