# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# Create Regions
north_america = Region.create!(name: 'NorthAmerica')
europe = Region.create!(name: 'Europe')
asia = Region.create!(name: 'Asia')
africa = Region.create!(name: 'Africa')
south_america = Region.create!(name: 'SouthAmerica')
australia = Region.create!(name: 'Australia')
antarctica = Region.create!(name: 'Antarctica')

# Create Countries and Categories
# Example for North America
usa = north_america.countries.create!(name: 'USA')
canada = north_america.countries.create!(name: 'Canada')

['Food', 'Housing', 'Transportation', 'Healthcare', 'Education'].each do |category|
  usa.categories.create!(name: category, inflation_rate: rand(2.0..3.5))
  canada.categories.create!(name: category, inflation_rate: rand(2.0..3.5))
end

# Repeat for other regions and countries as needed

