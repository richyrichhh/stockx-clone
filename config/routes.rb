Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :update, :destroy] do
      # resources :portfolio_items, only: [:index, :create]
      get '/portfolio', :to => 'portfolio_items#index'
      post '/portfolio', :to => 'portfolio_items#show'
    end
    resources :products, only: [:create, :show, :update, :index]
    # resources :portfolio_items, only: [:destroy]
    delete '/portfolio/:id', :to => 'portfolio_items#destroy'
  end
end
