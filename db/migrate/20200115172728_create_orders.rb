class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :product_id, null: false
      t.integer :seller_id, null: false
      t.integer :buyer_id
      t.string :size, null: false
      t.integer :price, null: false
      t.string :type, null: false
      t.string :active, null: false
      t.string :sold, null: false
      t.string :shipped, null: false

      t.timestamps
    end
    add_index :orders, :product_id
    add_index :orders, :seller_id
    add_index :orders, :buyer_id
  end
end
