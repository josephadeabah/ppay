class CountrySerializer < ActiveModel::Serializer
    attributes :id, :name, :overall_inflation_rate
    has_many :categories, serializer: CategorySerializer
end
  