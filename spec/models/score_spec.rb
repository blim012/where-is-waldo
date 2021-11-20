require 'rails_helper'

RSpec.describe Score, type: :model do
  describe 'associations' do
    it { should belong_to(:waldo_screen).without_validating_presence }
  end

  describe 'validations' do
    it { should validate_presence_of(:seconds) }
  end
end
