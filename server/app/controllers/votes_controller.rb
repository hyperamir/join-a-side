class VotesController < ApplicationController
  
  def index
  end

  def update
    @vote = Vote.find_by(question_id: params[:question_id])
    @vote.vote_a = params[:vote_a]
    @vote.vote_b = params[:vote_b]

    if @vote.save
      render json: @vote
    else
      render json: @vote.errors
    end 
  end

  private 

  def vote_params
    params.permit(
      :question_id,
      :vote_a,
      :vote_b
    )
  end

end
