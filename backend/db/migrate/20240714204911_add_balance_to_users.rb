class AddBalanceToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :balance, :decimal, default: 0.0, null: false
    add_column :users, :currency, :string, default: 'USD', null: false
  end
end
