class Api::OrdersController < ApplicationController
  def user_index
    @orders = current_user.taken_orders.concat(current_user.listed_orders)
    render :index
  end

  def product_index
    @orders = Product.find(params[:product_id]).orders
    render :index
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

  def order_params
    params.require(:order).permit(:id, :product_id, :asker_id, :taker_id, :price, :Type, :active, :sold, :shipped, :size, :sex)
  end
end

