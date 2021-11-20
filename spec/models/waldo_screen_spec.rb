require 'rails_helper'

RSpec.describe WaldoScreen, type: :model do
  subject { described_class.new(name: 'test screen', image_url: 'test url') }

  it 'is valid with valid content' do
    expect(subject).to be_valid
  end

  describe 'associations' do
    it { should have_many(:scores) }
    it { should have_many(:characters) }
  end

  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:image_url) }
  end
end
