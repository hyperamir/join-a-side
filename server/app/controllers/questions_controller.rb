class QuestionsController < ApplicationController

  def index
    category = Category.find params[:category_id]
    render json: category.questions
  end

end
