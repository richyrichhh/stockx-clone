class PortfolioItem < ApplicationRecord
  validates :user_id, :product_id, :size, presence: true

  belongs_to :user

  belongs_to :product
end
