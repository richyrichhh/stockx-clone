class CreatePortfolioItems < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolio_items do |t|
      t.integer :user_id, null: false
      t.integer :product_id, null: false
      t.string :size, null: false
      t.timestamps
    end
    add_index :portfolio_items, :user_id
    add_index :portfolio_items, :product_id
  end
end
