class Api::SalesController < ApplicationController
  def product_index
    @sales = Product.find(params[:product_id]).sales
  end

  def product_size_index
    @sales = Product.find(params[:product_id]).sales.where("size = #{params[:size]}")
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
end
