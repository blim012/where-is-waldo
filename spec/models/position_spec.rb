require 'rails_helper'

RSpec.describe Position, type: :model do
  describe 'associations' do
    it { should belong_to(:character).required }
    it { should belong_to(:waldo_screen).required }
  end

  describe 'validations' do
    it { should validate_presence_of(:x_pos) }
    it { should validate_presence_of(:y_pos) }
  end
end
