class CountrySerializer < ActiveModel::Serializer
    attributes :name, :overall_inflation_rate
    has_many :categories
end
  