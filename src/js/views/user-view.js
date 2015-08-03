'use strict'

import UserModel from '../models/user-model';
import Router from '../routers/router';
import Users from '../collections/users';

var UserView = Backbone.View.extend({
  template: _.template($('#users-list').html()),

  tagName: 'ul',

  initialize: function() {
    this.listenTo(this.collection, 'listUsers', this.addUser);
  },

  addAll: function() {
    this.collection.each(function(user) {
      this.addUser(user);
    }, this);
  },

  addUser: function(user) {
    var view = new UserView({model: UserModel});
    this.$el.append(view.render().el);

  },

  render: function() {
    return this;
  }
});

export default UserView;
