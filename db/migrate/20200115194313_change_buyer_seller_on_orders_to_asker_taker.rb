class ChangeBuyerSellerOnOrdersToAskerTaker < ActiveRecord::Migration[5.2]
  def change
    rename_column :orders, :buyer_id, :taker_id
    rename_column :orders, :seller_id, :asker_id
  end
end
