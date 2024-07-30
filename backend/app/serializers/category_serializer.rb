class CategorySerializer < ActiveModel::Serializer
    attributes :id, :name, :inflation_rate
    belongs_to :country, serializer: CountrySerializer
end
  