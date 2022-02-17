class QuestionsController < ApplicationController

  def index
    category = Category.find_by(id: params[:category_id])
    render json: category.questions
  end

  def show
    question = Question.find params[:id]
    render json: question
  end

  def create
      question = Question.new(question_params)
      if question.save
        render json: @question
      else
        render json: @question.errors
      end
  end

  private 

  def question_params
    params.permit(
      :title,
      :answer_a,
      :answer_b,
      :category_id,
      :user_id
    )
  end

end
