class Api::V1::CharacterSerializer < ActiveModel::Serializer
  attributes :name, :image_url
  has_many :positions
end
