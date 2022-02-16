class RemoveVoteBFromQuestions < ActiveRecord::Migration[5.2]
  def change
    remove_column :questions, :vote_b, :integer
  end
end
