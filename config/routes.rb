Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :update, :destroy] do
      # resources :portfolio_items, only: [:index, :create]
      get '/portfolio', :to => 'portfolio_items#index'
      post '/portfolio', :to => 'portfolio_items#create'
      get '/orders', :to => 'orders#user_index'
    end
    resources :products, only: [:create, :show, :update, :index] do
      get '/orders', :to => 'orders#product_index'
      get '/sales', :to => 'sales#product_index'
      get '/sales/last', :to => 'sales#product_last_sale'
      get '/sales/:size', :to => 'sales#product_size_index'
    end
    resources :orders, only: [:create, :update]
    resources :sales, only: [:create, :update]
    delete '/portfolio/:id', :to => 'portfolio_items#destroy'
  end
end
