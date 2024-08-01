Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      namespace :members do
        post 'auth/signup', to: 'auth#signup'
        post 'auth/login', to: 'auth#login'
        post 'auth/password/reset', to: 'auth#password_reset'
        put 'auth/password/reset', to: 'auth#reset_password'
        get 'users', to: 'users#index'        # Route to get all users
        get 'users/me', to: 'users#show'       # Route for the current authenticated user
        put 'users/me', to: 'users#update'
        put 'users/me/password', to: 'users#change_password'
        get 'users/:id', to: 'users#show'      # Route to get user by ID
      end
      namespace :locations do
        resources :regions
        resources :countries
        resources :categories
      end
    end
  end
end
