Rails.application.routes.draw do
  devise_for :users
  root :to => "site#root"
  
  namespace :api, :defaults => {:format => :json} do
    resources :godos, :only => [:create, :index, :show, :update, :destroy] do
      # resources :comments, :only => [:index]
    end

    resources :comments, :only => [:create, :show, :destroy, :update]
  end
end
