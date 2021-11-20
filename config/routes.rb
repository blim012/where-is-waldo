Rails.application.routes.draw do
  root to: 'waldo#index'
  get '*path', to: 'waldo#index'
end
