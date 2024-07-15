class User < ApplicationRecord
  has_secure_password

  has_many :wages
  has_many :negotiations

  validates :email, presence: true, uniqueness: true
  validates :first_name, :last_name, presence: true
end
