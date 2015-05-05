class CreateGodos < ActiveRecord::Migration
  def change
    create_table :godos do |t|
      t.string :title, :null => false
      t.timestamps null: false
    end
  end
end
