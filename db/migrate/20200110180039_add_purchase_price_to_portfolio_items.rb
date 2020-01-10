class AddPurchasePriceToPortfolioItems < ActiveRecord::Migration[5.2]
  def change
    add_column :portfolio_items, :purchase_price, :integer
  end
end
