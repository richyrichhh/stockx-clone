class Api::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.authenticate_username(params[:user][:username], params[:user][:password])
    if @user.nil?
      flash.now[:errors] = ['Invalid username or password.']
    else
      login(@user)
      redirect_to api_user_url(@user)
    end
  end

  def destroy
    logout
    render json: {}
  end
end
