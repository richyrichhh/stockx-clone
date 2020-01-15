class AddDbValidationsToProducts < ActiveRecord::Migration[5.2]
  def change
    change_column :products, :model, :string, {null: false}
    change_column :products, :brand, :string, {null: false}
  end
end
