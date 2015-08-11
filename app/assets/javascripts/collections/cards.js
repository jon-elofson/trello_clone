Trello.Collections.Cards = Backbone.Collection.extend({

  url: "/api/cards",

  model: Trello.Models.Card,

  getOrFetch: function (id) {
    var card = this.get(id);
    if (!card) {
      card = new Trello.Models.Card({id: id});
      this.add(card);
    }
    card.fetch();
    return card;
  }


});
