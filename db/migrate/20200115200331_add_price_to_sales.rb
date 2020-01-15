class AddPriceToSales < ActiveRecord::Migration[5.2]
  def change
    add_column :sales, :price, :integer, null: false
  end
end
