class CreatePositions < ActiveRecord::Migration[6.1]
  def change
    create_table :positions do |t|
      t.decimal :x_pos
      t.decimal :y_pos
      t.references :character, null: false, foreign_key: true
      t.references :waldo_screen, null: false, foreign_key: true

      t.timestamps
    end
  end
end
