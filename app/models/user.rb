class User < ApplicationRecord
  attr_reader :password

  validates :username, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  after_initialize :ensure_session_token

  has_many :portfolio_items,
    class_name: :PortfolioItem

  has_many :portfolio,
    through: :portfolio_items,
    source: :product

  has_many :bought_orders,
    primary_key: :id,
    foreign_key: :buyer_id,
    class_name: :Order

  has_many :sold_orders,
    primary_key: :id,
    foreign_key: :seller_id,
    class_name: :Order

  def self.authenticate_username(username, password)
    user = User.find_by(username: username)
    return nil unless user
    return (user.is_password?(password) ? user : nil)
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end
  
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    return self.session_token
  end
end
