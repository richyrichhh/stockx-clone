class AddCreditToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :credit, :integer
  end
end
