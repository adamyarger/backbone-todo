class FixColumnName < ActiveRecord::Migration
  def change
  	rename_column :godo_comments, :context, :content
  end
end
