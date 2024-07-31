class AddUniqueIndexToCategories < ActiveRecord::Migration[7.1]
  def change
    add_index :categories, [:name, :country_id], unique: true
  end
end
