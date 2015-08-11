json.extract! @board, :name, :id
  json.lists @board.lists do |list|
    json.extract! list, :title, :id, :board_id
    json.cards list.cards do |card|
      json.extract! card, :content, :title
   end
end
