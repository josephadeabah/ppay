class CountrySerializer < ActiveModel::Serializer
    attributes :id, :name, :overall_inflation_rate, :updated_at, :created_at
    has_many :categories, serializer: CategorySerializer
end
