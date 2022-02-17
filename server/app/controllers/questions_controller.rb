class QuestionsController < ApplicationController

  def index
    category = Category.find params[:category_id]
    questionsWithVotes = []
    category.questions.each do |question|
      q = {
        id: question.id,
        title: question.title,
        answer_a: question.answer_a,
        answer_b: question.answer_b,
        category_id: question.category_id,
        user_id: question.user_id,
        vote_a: question.vote.vote_a,
        vote_b: question.vote.vote_b
      }
      questionsWithVotes = questionsWithVotes + [q]
    end
    
    render json: questionsWithVotes
  end

  def show
    question = Question.find params[:id]
    votes = question.vote
    
    q = {
      id: question.id,
      title: question.title,
      answer_a: question.answer_a,
      answer_b: question.answer_b,
      category_id: question.category_id,
      user_id: question.user_id,
      vote_a: votes.vote_a,
      vote_b: votes.vote_b
    }

    render json: q  end

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
