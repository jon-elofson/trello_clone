Trello.Views.BoardIndexItem = Backbone.CompositeView.extend({

  template: JST['board_index_item'],

  tagName: "li",

  events: {
    "click": "showBoard"
  },

  initialize: function () {
    this.listenTo(this.model,"sync",this.render);
  },

  render: function () {
    this.$el.data('id',this.model.id);
    this.$el.html(this.template({board: this.model}));
    return this;
  },

  showBoard: function (event) {
    var id = $(event.currentTarget).data('id');
    Backbone.history.navigate('#/boards/' + id,{trigger: true});
  },




});
