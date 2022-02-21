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
  
  def show
    puts "user_id #{params[params[:user_id]]}"
    user = User.find_by_id(params[:user_id])
    #user = User.find_by id: params[:user_id] 
    #user = User.find_by_id id: params[:user_id] 
    userName = {
        first_name: user.first_name,
        last_name: user.last_name
      }
    render json: userName

  end

  def login 
    @user = User.find_by_email(params[:email])
      if @user.password == params[:password]
        render json: @user
      end
    
    end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end

end
