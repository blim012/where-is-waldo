class Api::V1::WaldoScreenSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url
  has_many :scores do
    object.scores.order(:seconds)
  end
end
