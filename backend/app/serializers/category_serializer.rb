class CategorySerializer < ActiveModel::Serializer
    attributes :id, :name, :inflation_rate, :updated_at, :created_at
    # belongs_to :country, serializer: CountrySerializer
end
  