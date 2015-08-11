Trello.Views.ListShow = Backbone.CompositeView.extend({

  template: JST['list_show'],

  events: {
    'click .remove-list-button': 'destroyList',
    'click .new-card-button': 'newCard'
  },

  tagName: 'li',

  initialize: function (options) {
    this.listenTo(this.model,"sync",this.render);
    this.listenTo(this.card,"sync add remove",this.render);
    this.cards = this.model.cards();
  },

  render: function () {
    this.$el.html(this.template({list: this.model}));
    var that = this;
    this.cards.each(function (card) {
      var view = new Trello.Views.CardShow({model: card});
      that.addSubview(".card-list",view);
    });
    return this;
  },


  destroyList: function (e) {
    e.preventDefault();
    var board_id = this.model.escape('board_id');
    this.model.destroy();
    Backbone.history.navigate("/boards/" + board_id, {trigger: true});
  },

  newCard: function () {
    var card = new Trello.Models.Card();
    var view = new Trello.Views.CardNew({collection: this.cards,
      model: card, list: this.model});
    this.addSubview(".card-list",view,true);
  }




});
