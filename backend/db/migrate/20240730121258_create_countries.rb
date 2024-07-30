class CreateCountries < ActiveRecord::Migration[7.1]
  def change
    create_table :countries do |t|
      t.string :name
      t.string :overall_inflation_rate
      t.references :region, null: false, foreign_key: true

      t.timestamps
    end
  end
end
