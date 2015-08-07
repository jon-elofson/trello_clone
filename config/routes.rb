Rails.application.routes.draw do
  resource :session, only: [:create,:new,:destroy]
  resources :users, only: [:create,:new]
  namespace :api do
    resources :boards, only: [:create,:show,:update,:index,:destroy]
    resources :lists, only: [:create, :update,:destroy]
    resources :cards, only: [:create,:update,:destroy]
    resources :items, only: [:create,:update,:destroy,:index]
  end
  root 'sessions#new'
end
