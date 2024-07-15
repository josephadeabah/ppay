class CreateWages < ActiveRecord::Migration[7.1]
  def change
    create_table :wages do |t|
      t.references :user, null: false, foreign_key: true
      t.string :job_title
      t.string :location
      t.decimal :wage

      t.timestamps
    end
  end
end
