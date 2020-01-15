class Sale < ApplicationRecord
  validates :order_id, :product_id, :size, :date, null: false

  has_one :order

  belongs_to :product
end
