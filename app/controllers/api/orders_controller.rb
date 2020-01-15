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

  def order_params
    params.require(:order).permit(:id, :product_id, :seller_id, :buyer_id, :price, :Type, :active, :sold, :shipped, :created_at, :updated_at, :size, :sex)
  end
end

create_table "orders", force: :cascade do |t|
    t.integer "product_id", null: false
    t.integer "seller_id", null: false
    t.integer "buyer_id"
    t.integer "price", null: false
    t.string "type", null: false
    t.string "active", null: false
    t.string "sold", null: false
    t.string "shipped", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "size", null: false
    t.string "sex", null: false
    t.index ["product_id"], name: "index_orders_on_product_id"
  end
