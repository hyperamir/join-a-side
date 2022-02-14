class QuestionsController < ApplicationController
  def index
    @question = Question.find 1
    @comments = @question.comments
    render json: {
      question: @question,
      comments: @comments
    }
  end
end
