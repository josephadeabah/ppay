class Country < ApplicationRecord
    belongs_to :region
    has_many :categories, dependent: :destroy

    validates :name, presence: true, uniqueness: { scope: :region_id, message: "must be unique within the region" }
  end
