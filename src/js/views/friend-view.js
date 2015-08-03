'use strict'

import UserModel from '../models/friend-model';
import Router from '../routers/router';
import Users from '../collections/friends';

let FriendView = Backbone.View.extend({
  template: _.template($('#users-list').html()),

  tagName: 'ul',

  initialize: function() {
    this.listenTo(this.collection, 'listUsers', this.addUser);
  },

  render: function() {
    return this;
  }
});

export default FriendView;
