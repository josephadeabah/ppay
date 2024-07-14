class CreateTransactions < ActiveRecord::Migration[7.1]
  def change
    create_table :transactions do |t|
      t.decimal :amount, precision: 10, scale: 2
      t.string :currency
      t.string :status
      t.references :sender, index: true
      t.references :receiver, index: true

      t.timestamps
    end
  end
end
