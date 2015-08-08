window.Trello = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $content = $("#content");
    var boards = new Trello.Collections.Boards();
    var router = new Trello.Routers.Router({$el: $content, collection: boards});
    Backbone.history.start();
    boards.fetch();
  }
};
