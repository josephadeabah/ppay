class Country < ApplicationRecord
  belongs_to :region
  has_many :categories
end
