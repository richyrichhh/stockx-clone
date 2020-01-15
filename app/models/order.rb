class Order < ApplicationRecord
  validates :product_id, :seller_id, :size, :sex, :price, :type, :active, :sold, presence: true

  belongs_to :product

  belongs_to :buyer,
    foreign_key: :buyer_id,
    primary_key: :id,
    class_name: :User

  belongs_to :seller,
    foreign_key: :seller_id,
    primary_key: :id,
    class_name: :User
end
