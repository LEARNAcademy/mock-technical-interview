require 'rspec'
require_relative 'challenges'

describe SumNum do
  it 'takes in an array of numbers and returns the sum of the numbers' do
    sums = SumNum.new
    expect(sums.sum([42, 7, 27])).to eq(76)
    expect(sums.sum([25, 17, 47, 11])).to eq(100)
  end
end

describe HoursToSeconds do
  it 'takes in a number of hours and converts hours to seconds (60 minutes in an hour and 60 seconds in a minute)' do
    seconds = HoursToSeconds.new
    expect(seconds.convert_hours_to_seconds(2)).to eq(7200)
    expect(seconds.convert_hours_to_seconds(10)).to eq(36000)
  end
end