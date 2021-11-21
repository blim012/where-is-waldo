class Api::V1::WaldoScreenIndexSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :scores
  def scores
    object.scores.order(:seconds)
  end
end
