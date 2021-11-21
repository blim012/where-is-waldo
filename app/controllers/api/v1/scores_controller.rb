class Api::V1::ScoresController < ApplicationController
  protect_from_forgery with: :null_session
  
  def show
    @scores = Score.find_by waldo_screen_id: params[:id]
    if @scores
      render json: @scores
    else
      render json: {error: 'Waldo screen could not be found'}
    end
  end

  def create
    @score = Score.new(score_params)
    if @score.save
      render json: @score
    else
      render json: @score.errors
    end
  end

  private

  def score_params
    params.require(:score).permit(:seconds, :waldo_screen_id)
  end
end
