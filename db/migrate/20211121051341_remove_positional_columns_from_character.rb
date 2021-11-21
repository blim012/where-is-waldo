class RemovePositionalColumnsFromCharacter < ActiveRecord::Migration[6.1]
  def change
    remove_column :characters, :x_pos, :decimal
    remove_column :characters, :y_pos, :decimal
    remove_column :characters, :waldo_screen_id, :integer
  end
end
