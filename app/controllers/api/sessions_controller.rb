class Api::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.authenticate_username(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ["Invalid username or password."], status: 401
    else
      login(@user)
      render 'api/users/show'
    end
  end

  def destroy
    logout
    render json: {}
  end

  def index
    @user = current_user
    if @user
      render 'api/users/show'
    end
  end
end
