Rails.application.routes.draw do
 
 get '/teachers' => 'teachers#index'
 get '/teachers/:id' => 'teachers#show'

end
