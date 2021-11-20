require 'rails_helper'

RSpec.describe WaldoScreen, type: :model do
  subject { described_class.new(name: 'test screen', image_url: 'test url') }

  it 'is valid with valid content' do
    expect(subject).to be_valid
  end

  it 'is not valid without a name' do
    subject.name = nil;
    expect(subject).to_not be_valid
  end

  it 'is not valid without an image_url' do
    subject.image_url = nil;
    expect(subject).to_not be_valid
  end
end
