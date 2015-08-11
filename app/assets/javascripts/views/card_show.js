Trello.Views.CardShow = Backbone.CompositeView.extend({

  template: JST['card_show'],

  events: {
    'click .remove-card-button': 'removeCard',
    'click .new-card-button': 'addCard'
  },

  tagName: 'li',

  addCard: function () {

  },

  initialize: function (options) {
    this.listenTo(this.model,"sync",this.render);
  },

  render: function () {
    this.$el.html(this.template({card: this.model}));
    return this;
  },


});
