class CreateNegotiations < ActiveRecord::Migration[7.1]
  def change
    create_table :negotiations do |t|
      t.references :user, null: false, foreign_key: true
      t.text :details

      t.timestamps
    end
  end
end
