class Api::V1::PositionSerializer < ActiveModel::Serializer
  attributes :x_pos, :y_pos, :character
  def character
    object.character
  end
end
