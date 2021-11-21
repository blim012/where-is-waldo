class AddNameColumnToCharacters < ActiveRecord::Migration[6.1]
  def change
    add_column :characters, :name, :string
  end
end
