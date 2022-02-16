class RemoveVoteAFromQuestions < ActiveRecord::Migration[5.2]
  def change
    remove_column :questions, :vote_a, :integer
  end
end
