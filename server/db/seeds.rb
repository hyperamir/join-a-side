# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Helper functions
def open_asset(file_name)
  File.open(Rails.root.join('db', 'seed_assets', file_name))
end

# Only run on development (local) instances not on production, etc.
unless Rails.env.development?
  puts "Development seeds only (for now)!"
  exit 0
end


puts 'Starting the seeds'


Category.destroy_all
User.destroy_all
Question.destroy_all
Vote.destroy_all
Comment.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end



Category.create(category: 'video games')
Category.create(category: 'sport')
Category.create(category: 'movies')
Category.create(category: 'social')
Category.create(category: 'food')

User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: '1234', password_confirmation: '1234', img: open_asset('image01.png'))
User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: '1234', password_confirmation: '1234', img: open_asset('image02.png'))
User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: '1234', password_confirmation: '1234', img: open_asset('image03.png'))
User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: '1234', password_confirmation: '1234', img: open_asset('image04.png'))
User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: '1234', password_confirmation: '1234', img: open_asset('image05.png'))
User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: '1234', password_confirmation: '1234', img: open_asset('image06.png'))
User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: 'joe@gmail.com', password: '1234', password_confirmation: '1234', img: open_asset('image06.png'))


Question.create(category_id: 1, user_id: 1, title: 'Do you guys like Call of Duty or Halo?', answer_a: 'Call of Duty', answer_b: 'Halo')
Question.create(category_id: 1, user_id: 6, title: 'Should I go for XBOX or PS5?', answer_a: 'Xbox', answer_b: 'PS5')
Question.create(category_id: 2, user_id: 5, title: 'Best soccer player?', answer_a: 'Ronaldo', answer_b: 'Messi')
Question.create(category_id: 2, user_id: 1, title: 'Which one you are into?', answer_a: 'Soccer', answer_b: 'Baseball')
Question.create(category_id: 2, user_id: 3, title: 'Which sport should I learn?', answer_a: 'Mountain biking', answer_b: 'Ice-skating')
Question.create(category_id: 3, user_id: 2, title: 'Are you a fan of movies or series?', answer_a: 'Movies', answer_b: 'Series')
Question.create(category_id: 3, user_id: 3, title: 'Should I watch Games Of Thrones or Beaking Bad?', answer_a: 'Games Of Thrones', answer_b: 'Breaking Bad')
Question.create(category_id: 4, user_id: 4, title: 'Should all people have the right to own guns?', answer_a: 'Yes', answer_b: 'No')
Question.create(category_id: 4, user_id: 2, title: 'Death penalty should be abolished?', answer_a: 'Absolutely!', answer_b: 'Never!')
Question.create(category_id: 5, user_id: 3, title: 'Which one is easier to make?', answer_a: 'Pasta', answer_b: 'Burger')
Question.create(category_id: 5, user_id: 6, title: 'Best veggie burger?', answer_a: 'McDonalds', answer_b: 'Burgur king')

Vote.create(question_id: 1,vote_a: 3, vote_b: 6)
Vote.create(question_id: 2,vote_a: 1, vote_b: 3)
Vote.create(question_id: 3,vote_a: 4, vote_b: 8)
Vote.create(question_id: 4,vote_a: 7, vote_b: 6)
Vote.create(question_id: 5,vote_a: 1, vote_b: 5)
Vote.create(question_id: 6,vote_a: 7, vote_b: 3)
Vote.create(question_id: 7,vote_a: 2, vote_b: 8)
Vote.create(question_id: 8,vote_a: 1, vote_b: 8)
Vote.create(question_id: 9,vote_a: 5, vote_b: 2)
Vote.create(question_id: 10,vote_a: 4, vote_b: 1)
Vote.create(question_id: 11,vote_a: 5, vote_b: 5)

Comment.create(question_id: 1, user_id:6, comment: 'I like COD, the game speed is much better!')
Comment.create(question_id: 1, user_id:5, comment: 'Only Haloooo!')
Comment.create(question_id: 1, user_id:4, comment: 'There are more players on CoD')
Comment.create(question_id: 2, user_id:3, comment: 'Only Soccerrrrrr!')
Comment.create(question_id: 2, user_id:2, comment: 'Not comparable!')


puts 'Seeding Done!'


