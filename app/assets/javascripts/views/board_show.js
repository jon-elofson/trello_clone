Trello.Views.BoardShow = Backbone.CompositeView.extend({

  template: JST['board_show'],

  events: {
    "click .home-button": "goHome",
    "click .delete-button": "deleteBoard",
    "click .new-list-button": "newList"
  },

  initialize: function () {
    this.listenTo(this.model,"sync",this.render);
    this.lists = this.model.lists();
    this.listenTo(this.lists,"sync add remove",this.render)
  },

  render: function () {
    this.$el.html(this.template({board: this.model}));
    var that = this;
    this.lists.each(function (list) {
      var view = new Trello.Views.ListShow({model: list});
      that.addSubview("ul",view);
    });
    return this;
  },

  goHome: function () {
    Backbone.history.navigate("#", {trigger: true});
  },

  newList: function () {
    var list = new Trello.Models.List();
    var view = new Trello.Views.ListNew({collection: this.lists,
      model: list,board: this.model});
    this.addSubview("ul",view,true);
  },

  deleteBoard: function () {
    this.model.destroy();
    Backbone.history.navigate("#", {trigger: true});
  }


});
