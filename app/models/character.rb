class Character < ApplicationRecord
  has_many :positions
  validates :image_url, presence: true
  validates :name, presence: true
end
