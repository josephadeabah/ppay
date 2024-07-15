class Wage < ApplicationRecord
  belongs_to :user

  validates :job_title, :location, :wage, presence: true
end
