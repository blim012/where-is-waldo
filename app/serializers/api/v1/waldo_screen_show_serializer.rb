class Api::V1::WaldoScreenShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url
  has_many :positions
end
