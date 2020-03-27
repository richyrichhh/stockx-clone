class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
          
      t.integer "product_id", null: false
      t.integer "user_id", null: false
  
      t.timestamps
    end
    add_index :follows, :product_id
    add_index :follows, :user_id
    add_index :follows, [:user_id, :product_id], unique: true
  end
end
