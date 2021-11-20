class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :image_url
      t.decimal :x_pos
      t.decimal :y_pos
      t.references :waldo_screen, null: false, foreign_key: true

      t.timestamps
    end
  end
end
