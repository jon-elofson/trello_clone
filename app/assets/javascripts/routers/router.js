Trello.Routers.Router = Backbone.Router.extend({

  routes: {
    "": 'boardsIndex',
    "boards/:id": 'boardShow'
  },

  initialize: function (options) {
    this.$el = options.$el;
    this.collection = options.collection;
  },

  boardsIndex: function () {
    var boards = new Trello.Collections.Boards();
    var view = new Trello.Views.BoardIndex({collection: boards});
    this._swapView(view);
    boards.fetch();
  },

  boardShow: function (id) {
   var board = this.collection.getOrFetch(id);
   var view = new Trello.Views.BoardShow({model: board});
   this._swapView(view);
  },

  _swapView: function (view) {
    this._view && this._view.remove();
    this._view = view;
    this.$el.html(view.render().$el);
  }






});
