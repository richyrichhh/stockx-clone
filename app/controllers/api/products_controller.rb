class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      render :show
    else
      flash.now[:errors] = @product.errors.full_messages
    end
  end

  def update
    @product = Product.find(params[:id])
    if @product.update(product_params)
      render :show
    else
      flash.now[:errors] = @product.errors.full_messages
    end
  end

  def show
    @product = Product.find(params[:id])
  end

  def product_params
    params.require[:product].permit[:id, :name, :description, :style_code, :colorway, :retail_price, :img_path, :release_date]
  end
end
