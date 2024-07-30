class RegionSerializer < ActiveModel::Serializer
    attributes :name
    has_many :countries
end
  