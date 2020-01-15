class Api::OrdersController < ApplicationController
  def user_index
    @orders = current_user.bought_orders.concat(current_user.sold_orders)
  end

  def product_index
    @orders = Product.find(params[:product_id]).orders
  end

  def create
    @order = Order.new(order_params)
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
end
