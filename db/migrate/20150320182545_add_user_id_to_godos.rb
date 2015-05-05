class AddUserIdToGodos < ActiveRecord::Migration
  def change
    add_column :godos, :user_id, :integer
  end
end
