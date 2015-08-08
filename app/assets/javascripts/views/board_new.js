Trello.Views.BoardNew = Backbone.CompositeView.extend({

  template: JST['board_new'],

  tagName: 'li',

  events: {
    "submit .form-new-board": "newBoardHandler"
  },

  render: function () {
    this.$el.addClass('new-board-form');
    this.$el.html(this.template({board: this.model}));
    return this;
  },

  newBoardHandler: function (e) {
    debugger;
    e.preventDefault();
    var $form = this.$('.form-new-board');
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
    Backbone.history.navigate("", {trigger: true});
  }

});
