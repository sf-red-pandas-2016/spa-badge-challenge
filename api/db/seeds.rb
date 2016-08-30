# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'ffaker'

10.times do
  Boot.create(
    name: FFaker::Name.name
  )
end

50.times do
  Badge.create(
    description: FFaker::HipsterIpsum.phrase
  )
end
