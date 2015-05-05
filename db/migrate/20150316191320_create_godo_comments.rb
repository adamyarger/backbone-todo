class CreateGodoComments < ActiveRecord::Migration
  def change
    create_table :godo_comments do |t|
      t.integer  :godo_id, :null => false
      t.text  :context, :null => false

      t.timestamps null: false
    end

    add_index :godo_comments, :godo_id
  end
end
