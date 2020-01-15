class AddSexColToSales < ActiveRecord::Migration[5.2]
  def change
    remove_column :sales, :size
    remove_column :orders, :size
    add_column :sales, :sex, :string, null: false
    add_column :sales, :size, :string, null: false
    add_column :orders, :size, :string, null: false
  end
end
