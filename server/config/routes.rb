Rails.application.routes.draw do
  get 'categories/index'
  get 'users/new'
  get 'users/create'
  get 'comments/index'
  get 'questions/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'categories#index'
  
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'
  
  get '/signup', to: 'users#new'
  post '/users', to: 'users#create'
  
  resources :categories do
    resources :questions
  end

end
