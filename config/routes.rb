Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :waldo_screens, only: [ :index, :show ]
    end
  end

  root to: 'waldo#index'
  get '*path', to: 'waldo#index'
end
