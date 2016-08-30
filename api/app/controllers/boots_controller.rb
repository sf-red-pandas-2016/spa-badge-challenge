class BootsController < ApplicationController
  def index
    @boots = Boot.all

    respond_to do |format|
      format.html
      format.json
  end

  def show
    @boot = Boot.find(params[:id])

    respond_to do |format|
      format.html
      format.json
  end
end
