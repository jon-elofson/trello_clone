Trello.Views.ListNew = Backbone.CompositeView.extend({

  template: JST['list_new'],

  events: {
    "submit .new-list-form": "newListHandler"
  },

  initialize: function (options) {
    this.board = options.board;
  },

  render: function () {
    this.$el.html(this.template({list: this.model,board: this.board}));
    return this;
  },

  newListHandler: function (e) {
    e.preventDefault();
    var $form = this.$('.new-list-form');
    var formdata = $form.serializeJSON();
    var that = this;
    this.model.save(formdata, {
      success: function () {
        that.collection.add(that.model);
      },
      error: function (model,response) {
        $('.errors').empty();
        response.responseJSON.forEach(function (error) {
          var $li = $("<li>").text(error);
          that.$(".errors").append($li);
        });
      }
    });
    Backbone.history.navigate("#/boards/" + this.board.escape('id'),
    {trigger: true});
  }

});
