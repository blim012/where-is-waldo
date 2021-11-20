class Character < ApplicationRecord
  belongs_to :waldo_screen, required: true
  validates :image_url, presence: true
  validates :x_pos, presence: true
  validates :y_pos, presence: true
end
