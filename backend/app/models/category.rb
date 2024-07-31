class Category < ApplicationRecord
    belongs_to :country
  
    validates :name, presence: true, uniqueness: { scope: :country_id, message: "must be unique within the country" }
end
  