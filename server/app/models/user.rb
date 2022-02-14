class User < ApplicationRecord

  has_secure_password

  has_many :questions
  has_many :comments

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: { case_sesitive: false }
  validates :password, presence: true, length: { minimum: 3 }
  validates :password_confirmation, presence: true

  def self.authenticate_with_credentials (email, password)
    email = email.downcase.strip
    user = User.find_by_email(email)
    # If the user exists AND the password entered is correct
    if user && user.authenticate(password)
      user
    else
      nil
    end
  end

end
