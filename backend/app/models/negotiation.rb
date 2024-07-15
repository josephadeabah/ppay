class Negotiation < ApplicationRecord
  belongs_to :user

  validates :details, presence: true
end
