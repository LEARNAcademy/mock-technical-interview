require 'rspec'
require_relative 'num_sum'

describe SumNum do
  it 'takes in an array of numbers and returns the sum of the numbers' do
    sums = SumNum.new
    expect(sums.array_adder([42, 7, 27])).to eq 76
    expect(sums.array_adder([25, 17, 47, 11])).to eq 100
  end
end
