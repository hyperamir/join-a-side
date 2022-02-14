class QuestionsController < ApplicationController

  def index
    category = Category.find params[:category_id]
    render json: category.questions
  end

  def show
    question = Question.find params[:id]
    render json: question
  end

end
