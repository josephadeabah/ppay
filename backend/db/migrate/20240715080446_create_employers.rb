class CreateEmployers < ActiveRecord::Migration[7.1]
  def change
    create_table :employers do |t|
      t.string :name
      t.string :email
      t.string :company

      t.timestamps
    end
  end
end
