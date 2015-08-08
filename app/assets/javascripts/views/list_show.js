Trello.Views.ListShow = Backbone.CompositeView.extend({

  template: JST['list_show'],

  tagName: 'li',

  initialize: function () {
    this.listenTo(this.model,"sync",this.render);
  },

  render: function () {
    this.$el.html(this.template({list: this.model}));
    return this;
  },


});
