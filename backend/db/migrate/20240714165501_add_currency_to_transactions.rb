class AddCurrencyToTransactions < ActiveRecord::Migration[7.1]
  def change
    add_column :transactions, :currency, :string
  end
end
