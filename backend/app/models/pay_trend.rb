class PayTrend < ApplicationRecord
  validates :country, :industry, :company, :role, :currentSalaryByCompany, :currentSalaryByRole, :change, :changeTimeframe, :benefits, presence: true
end
