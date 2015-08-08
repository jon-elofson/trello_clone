# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

20.times do
  @user = User.new(username: Faker::Internet.email,password: 'testtest')
  @user.save
  3.times do
    @board = Board.new(name: Faker::Commerce.color, user_id: @user.id )
    @board.save
  end
end

Board.all.each do |board|
  3.times do |num|
    @list = List.new(title: Faker::Address.state, ord: num, board_id: board.id)
    @list.save
  end
end
