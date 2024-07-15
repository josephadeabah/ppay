# app/models/user.rb
class User < ApplicationRecord
  has_secure_password

  has_many :wages
  has_many :negotiations

  validates :email, presence: true, uniqueness: true
  validates :first_name, :last_name, presence: true

  def admin?
    self.role == 'admin'  # Example assuming 'role' is a column in your users table
  end
end
