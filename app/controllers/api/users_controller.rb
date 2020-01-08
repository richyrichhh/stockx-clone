class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      flash.now[:errors] = @user.errors.full_messages
    end
  end

  def update
    @user = User.find(user_params[:id])
    if @user.update(user_params)
      render :show
    else
      flash.now[:errors] = @user.errors.full_messages
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :password, :email, :id)
  end
end
