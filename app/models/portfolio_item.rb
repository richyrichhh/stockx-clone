class PortfolioItem < ApplicationRecord
  validates :user_id, :product_id, :size, :purchase_price, presence: true

  belongs_to :user

  belongs_to :product
end
