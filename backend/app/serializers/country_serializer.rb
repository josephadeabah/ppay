class CountrySerializer < ActiveModel::Serializer
  attributes :name, :categories

  def categories
    object.categories.map do |category|
      {
        category: category.name,
        inflationRate: category.inflation_rate.round(2)
      }
    end
  end
end
