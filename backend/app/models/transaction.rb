class Transaction < ApplicationRecord
  belongs_to :user
  belongs_to :sender, class_name: 'User', foreign_key: 'sender_id'
  belongs_to :receiver, class_name: 'User', foreign_key: 'receiver_id'

  validates :currency, presence: true, inclusion: { in: %w[USD EUR GBP RUB GHS] }
end
