Trello.Views.CardNew = Backbone.CompositeView.extend({

  template: JST['card_new'],

  tagName: 'li',

  events: {
    "submit .new-card-form": "newCardHandler"
  },

  initialize: function (options) {
    this.list = options.list;
  },

  render: function () {
    this.$el.html(this.template({card: this.model,list: this.list}));
    return this;
  },

  newCardHandler: function (e) {
    e.preventDefault();
    var $form = this.$('.new-card-form');
    var formdata = $form.serializeJSON();
    var that = this;
    this.model.save(formdata, {
      success: function () {
        that.collection.add(that.model);
        Backbone.history.navigate("#/boards/" + that.list.escape('board_id'), {trigger: true});
      },
      error: function (model,response) {
        $('.errors').empty();
        response.responseJSON.forEach(function (error) {
          var $li = $("<li>").text(error);
          that.$(".errors").append($li);
        });
      }
    });


  }

});
