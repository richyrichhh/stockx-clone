class Api::OrdersController < ApplicationController
  def user_index
    @orders = current_user.listed_orders.where("active = 'true'")
    render :index
  end

  def product_index
    @orders = Product.find(params[:product_id]).orders.where("active = 'true'")
    render :index
  end

  def create
    @order = Order.new(order_params)
    @order.taker_id = nil
    if @order.save
      render :show
    else
      render json: @order.errors.full_messages, status: 401
    end
  end
  
  def update
    @order = Order.find(params[:id])
    if @order.update(order_params)
      render :show
    else
      render json: @order.errors.full_messages, status: 401
    end
  end

  def show
    @order = Order.find(params[:id])
  end

  def order_params
    params.require(:order).permit(:id, :product_id, :asker_id, :taker_id, :price, :order_type, :active, :sold, :shipped, :size, :sex)
  end
end

