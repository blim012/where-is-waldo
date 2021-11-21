class Api::V1::WaldoScreensController < ApplicationController
  def index
    @screens = WaldoScreen.all
    render json: @screens, include: ['scores']
  end

  def show
    @screen = WaldoScreen.find_by id: params[:id]
    if @screen
      render json: @screen
    else
      render json: {error: 'Waldo screen does not exist'}
    end
  end
end
