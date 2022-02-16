class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.integer :vote_a
      t.integer :vote_b
      t.references :question

      t.timestamps
    end
  end
end
