class Api::SalesController < ApplicationController
  def product_index
    @sales = Product.find(params[:product_id]).sales
    render :index
  end

  def product_last_sale
    @sale = Product.find(params[:product_id]).sales.last#order('date desc').limit(1)[0]
    render :show
  end

  def product_size_index
    @sales = Product.find(params[:product_id]).sales.where("sales.size = #{params[:size]}")
    render :index
  end

  def create
    @sale = Sale.new(sale_params)
    if @sale.save
      render :show
    else
      render json: @sale.errors.full_messages, status: 401
    end
  end

  def update
    @sale = Sale.find(params[:id])
    if @sale.update(sale_params)
      render :show
    else
      render json: @sale.errors.full_messages, status: 401
    end
  end

  def show
    @sale = Sale.find(params[:id])
  end  

  def sale_params
    params.require(:sale).permit(:id, :order_id, :product_id, :sex, :size, :date, :active, :price)
  end
end