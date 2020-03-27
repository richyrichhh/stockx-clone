class Api::FollowsController < ApplicationController
  def user_index
    @follows = current_user.follows
    render :index
  end

  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 401
    end
  end

  def destroy
    @item = Follow.find(params[:id])
    @item.destroy
  end

  def follow_params
    params.require(:follow).permit(:id, :product_id, :user_id)
  end
end
