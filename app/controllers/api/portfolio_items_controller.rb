class Api::PortfolioItemsController < ApplicationController
  def index
    @items = PortfolioItem.where(user_id: current_user.id)
  end

  def create
    @item = PortfolioItem.new(item_params)
    if @item.save
      render :show
    else
      render json: @item.errors.full_messages, status: 401
    end
  end

  def update
    @item = PortfolioItem.find(params[:id])
    if @item.update(item_params)
      render :show
    else
      render json: @item.errors.full_messages, status: 401
    end
  end

  def show
    @item = PortfolioItem.find(params[:id])
  end

  def destroy
    @item = PortfolioItem.find(params[:id])
    @item.destroy
  end

  def item_params
    params.require(:item).permit(:id, :product_id, :user_id, :size, :purchase_price)
  end
end
