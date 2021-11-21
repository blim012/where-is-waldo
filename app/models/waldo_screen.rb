class WaldoScreen < ApplicationRecord
  has_many :scores
  has_many :positions
  validates :name, presence: true
  validates :image_url, presence: true
end
