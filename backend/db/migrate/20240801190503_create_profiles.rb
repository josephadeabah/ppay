class CreateProfiles < ActiveRecord::Migration[7.1]
  def change
    create_table :profiles do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name
      t.string :role
      t.string :status
      t.string :salary_role
      t.string :experience
      t.string :country
      t.string :industry
      t.string :category
      t.string :company
      t.string :actual_salary
      t.string :job_website
      t.string :avatar

      t.timestamps
    end
  end
end
