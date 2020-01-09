class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.text :description
      t.string :style_code
      t.string :colorway
      t.integer :retail_price, null: false
      t.string :img_path, null: false
      t.date :release_date, null: false
      t.timestamps
    end
    add_index :products, :name, unique: true
  end
end
