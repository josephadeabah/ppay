class AddUniqueIndexToRegions < ActiveRecord::Migration[7.1]
  def change
    add_index :regions, :name, unique: true
  end
end
