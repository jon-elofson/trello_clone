Trello.Views.BoardIndex = Backbone.CompositeView.extend({

  template: JST['board_index'],

  events: {
    "click .new-board-button": "newBoard",
    "submit .form-new-board": "showNewBoardButton"
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
    var button = this.$('.new-board-button');
    button.addClass('hidden-button');
    var board = new Trello.Models.Board();
    var view = new Trello.Views.BoardNew({model: board,
      collection: this.collection});
    this.addSubview("ul",view,true);
  },

  showNewBoardButton: function () {
    var button = this.$('.new-board-button');
    button.removeClass('hidden-button');
  }


});
