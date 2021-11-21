class Score < ApplicationRecord
  belongs_to :waldo_screen, required: true
  validates :seconds, presence: true
  validates :name, presence: true
end
