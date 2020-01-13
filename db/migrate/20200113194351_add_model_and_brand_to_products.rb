class AddModelAndBrandToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :model, :string
    add_column :products, :brand, :string
    change_column :users, :name, :string, {null: false}
    change_column :portfolio_items, :purchase_price, :integer, {null: false}
  end
end
