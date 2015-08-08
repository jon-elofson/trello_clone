Trello.Views.BoardIndex = Backbone.CompositeView.extend({

  template: JST['board_index'],

  events: {
    "click .new-board-button": "newBoard"
  },

  initialize: function () {
    this.listenTo(this.collection,"sync",this.render);
  },

  render: function () {
    this.$el.html(this.template());
    boards = this.collection;
    var that = this;
    boards.each(function (board) {
      var view = new Trello.Views.BoardIndexItem({model: board});
      that.addSubview("ul",view);
    });
    return this;
  },

  newBoard: function (event) {
    var board = new Trello.Models.Board();
    var view = new Trello.Views.BoardNew({model: board,
      collection: this.collection});
      debugger;
    this.addSubview("ul",view,true);
  }

});
