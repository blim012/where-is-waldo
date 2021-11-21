require 'rails_helper'

RSpec.describe Character, type: :model do
  describe 'associations' do
    it { should have_many(:positions) }
  end

  describe 'validations' do
    it { should validate_presence_of(:image_url) }
    it { should validate_presence_of(:name) }
  end
end
