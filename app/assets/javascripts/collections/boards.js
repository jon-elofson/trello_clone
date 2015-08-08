Trello.Collections.Boards = Backbone.Collection.extend({

  url: "/api/boards",

  model: Trello.Models.Board,

  getOrFetch: function (id) {
    var board = this.get(id);
    if (!board) {
      board = new Trello.Models.Board({id: id});
      this.add(board);
    }
    board.fetch();
    return board;
  }


});
