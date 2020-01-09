class Api::PortfolioItemsController < ApplicationController
  def index
    p '---'
    p params
    p '---'
    @items = PortfolioItem.all
  end

  def create
    @item = PortfolioItem.new(item_params)
    @item.user_id = current_user.id
    if @item.save
      render :show
    else
      flash.now[:errors] = @item.errors.full_messages
    end
  end

  def update
    @item = PortfolioItem.find(params[:id])
    if @item.update(item_params)
      render :show
    else
      flash.now[:errors] = @item.errors.full_messages
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
    params.require[:item].permit[:id, :product_id, :user_id, :size]
  end
end
