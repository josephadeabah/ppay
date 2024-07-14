class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password_digest
      t.decimal :balance, default: 0.0, precision: 10, scale: 2
      t.string :currency, default: 'USD'

      t.timestamps
    end
  end
end
