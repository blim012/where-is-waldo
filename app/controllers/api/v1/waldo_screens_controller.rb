class Api::V1::WaldoScreensController < ApplicationController
  def index
    @screens = WaldoScreen.all
    render json: @screens, each_serializer: Api::V1::WaldoScreenIndexSerializer
  end

  def show
    @screen = WaldoScreen.find_by id: params[:id]
    if @screen
      render json: @screen, serializer: Api::V1::WaldoScreenShowSerializer
    else
      render json: {error: 'Waldo screen does not exist'}
    end
  end
end
