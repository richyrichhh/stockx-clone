class ChangeOrderSizeToTwoCols < ActiveRecord::Migration[5.2]
  def change
    remove_column :orders, :size
    add_column :orders, :size, :integer, null: false
    add_column :orders, :sex, :string, null: false
  end
end
