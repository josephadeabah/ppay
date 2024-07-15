class CreateNegotiators < ActiveRecord::Migration[7.1]
  def change
    create_table :negotiators do |t|
      t.string :name
      t.string :email
      t.string :role

      t.timestamps
    end
  end
end
