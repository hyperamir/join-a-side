Rails.application.routes.draw do
  get 'questions/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'questions#index'

  # get '/login' => 'sessions#new'

end
