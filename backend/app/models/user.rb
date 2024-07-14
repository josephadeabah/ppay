class User < ApplicationRecord
    has_secure_password
    has_many :sent_transactions, class_name: 'Transaction', foreign_key: 'sender_id'
    has_many :received_transactions, class_name: 'Transaction', foreign_key: 'receiver_id'
  
    validates :balance, presence: true, numericality: { greater_than_or_equal_to: 0 }
    validates :currency, presence: true, inclusion: { in: %w[USD EUR GBP RUB GHS] }
  end
  