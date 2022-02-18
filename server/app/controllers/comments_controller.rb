class CommentsController < ApplicationController

  def index
    comments = Comment.all
    render json: comments
  end

  def show
    comments = Comment.find(params[:id])
    render json: comments
  end

  def create
    comment = Comment.new(comment_params)
    if comment.save
      render json: @comment
    else
      render json: @comment.errors
    end
end

private 

def comment_params
  params.permit(
    :comment,
    :question_id,
    :user_id
  )
end
end
