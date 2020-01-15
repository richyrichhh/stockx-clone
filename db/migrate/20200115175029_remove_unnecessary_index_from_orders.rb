class RemoveUnnecessaryIndexFromOrders < ActiveRecord::Migration[5.2]
  def change
    remove_index :orders, :buyer_id
    remove_index :orders, :seller_id
  end
end
