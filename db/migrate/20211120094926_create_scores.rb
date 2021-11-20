class CreateScores < ActiveRecord::Migration[6.1]
  def change
    create_table :scores do |t|
      t.integer :seconds
      t.references :waldo_screen, null: false, foreign_key: true

      t.timestamps
    end
  end
end
