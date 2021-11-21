class Position < ApplicationRecord
  belongs_to :character
  belongs_to :waldo_screen
  validates :x_pos, presence: true
  validates :y_pos, presence: true
end
