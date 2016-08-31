class TeachersController < ApplicationController
	
	def index
		teacher = Teacher.all
		render :json => teacher.as_json
	end

	def show
		teacher = Teacher.find(params[:id])
		badges = teacher.badges
		render :json => badges.as_json
	end


end
