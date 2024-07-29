class RegionSerializer < ActiveModel::Serializer
  attributes :name, :countries

  def countries
    object.countries.map do |country|
      {
        country: country.name,
        overallInflationRate: country.categories.average(:inflation_rate).round(2),
        categories: country.categories.map do |category|
          {
            category: category.name,
            inflationRate: category.inflation_rate.round(2)
          }
        end
      }
    end
  end
end
