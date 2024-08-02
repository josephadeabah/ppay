class RegionSerializer < ActiveModel::Serializer
    attributes :id, :name, :updated_at, :created_at
    has_many :countries

    def countries
      object.countries.map do |country|
        CountrySerializer.new(country, scope: scope, root: false, event: object).as_json
      end
    end
  end
