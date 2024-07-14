class AddSenderAndReceiverToTransactions < ActiveRecord::Migration[7.1]
  def change
    add_column :transactions, :sender_id, :integer
    add_column :transactions, :receiver_id, :integer
  end
end
