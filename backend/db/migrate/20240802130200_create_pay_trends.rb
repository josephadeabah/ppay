class CreatePayTrends < ActiveRecord::Migration[7.1]
  def change
    create_table :pay_trends do |t|
      t.string :country
      t.string :industry
      t.string :company
      t.string :role
      t.integer :currentSalaryByCompany
      t.integer :currentSalaryByRole
      t.integer :change
      t.string :changeTimeframe
      t.string :benefits

      t.timestamps
    end
  end
end
