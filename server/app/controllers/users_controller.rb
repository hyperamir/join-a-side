class UsersController < ApplicationController

  def new
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      redirect_to '/'
    else
      redirect_to '/signup'
    end
  end  
  
  def login 
    #User.authenticate_with_credentials(:userName, :password)
    puts "pass #{params[:password]}"
    puts "email #{params[:email]}"
    # hash = BCrypt::Password.create(params[:password])
    # puts "hash #{hash}"
    @user = User.find_by_email(params[:email])
      if @user.password == params[:password]
        puts "yay"
        render json: @user
      end
    #p :email 
    #user = User.find_by(email: params[:email], password_digest: hash)
    #Person.find_by(name: 'Spartacus', rating: 4)
    # puts password:
    puts "user #{@user}"
    
    end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end

end
