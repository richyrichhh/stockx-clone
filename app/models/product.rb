class Product < ApplicationRecord
  validates :name, :retail_price, :img_path, :release_date, presence: true

  has_many :portfolios,
    foreign_key: :product_id,
    class_name: :PortfolioItem

  has_many :owners,
    through: :portfolios,
    source: :user

  has_many :orders

  has_many :sales
end
