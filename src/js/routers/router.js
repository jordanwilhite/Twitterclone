'use strict';

import FeedView from '../views/feed-view';
import TweetView from '../views/tweet-view';
import UserView from '../views/user-view';
import SigninView from '../views/signin-view';
import SignupView from '../views/signup-view';
import UserModel from '../models/user-model';
import TweetModel from '../models/tweet-model'

var Router = Backbone.Router.extend({

  routes: {
    '': 'home',
    'users/sigin': 'signin',
    'users/register': 'signup',
    'users/listUsers': 'listUsers',
    'feed': 'feed',
    'feed/new': 'new'
  },

  home: function() {
    $('#primary').html('Welcome to the Twitterz!');
  },

  signin: function() {
    var view = new SigninView({
      model: UserModel
    })
    $('#primary').html(view.render().el);
  },

  signup: function(query, page) {
    var view = new SignupView({
      model: UserModel
    })
    $('#primary').html(view.render().el);
  },

  listUsers: function(query, page) {
    var view = new UsersView({
      model: UserModel
    })
    $('#primary').html(view.render().el);
  },

  feed: function(query, page) {
    var view = new FeedView({
      model: UserModel
    })
    $('#primary').html(view.render().el);
  },

  new: function() {
  var view = new LoginView({
    model: User
  });

    $('.app main').html('new tweet');
  }

});

export default new Router();
