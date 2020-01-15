class Order < ApplicationRecord
  validates :product_id, :asker_id, :size, :sex, :price, :type, :active, :sold, presence: true

  belongs_to :product

  belongs_to :buyer,
    foreign_key: :taker_id,
    primary_key: :id,
    class_name: :User

  belongs_to :seller,
    foreign_key: :asker_id,
    primary_key: :id,
    class_name: :User
end
