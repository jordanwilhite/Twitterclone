// import FeedView from '../views/feed-view';
// import TweetView from '../views/tweet-view';
import Users from '../collections/users.js';
import UserView from '../views/user-view';
import SigninView from '../views/signin-view';
import SignupView from '../views/signup-view';
import UserModel from '../models/user-model';

var Router = Backbone.Router.extend({

  routes: {
    '': 'signup',
    'users/signin': 'signin',
    'users/signup': 'signup',
    'users/listUsers': 'listUsers',
    'feed': 'feed',
    'feed/new': 'new'
  },

  home: function() {
    $('#primary').html('Welcome to the Twitterz!<br/>' + '<a href="#users/signin">Sign in</a> ' + '<a href="#users/signup">Sign up</a> ' + '<a href="#users/listUsers">User List</a> ' + '<a href="#feed">My Feed</a> ' + '<a href="#feed/">New Tweet</a> ');

  },

  signin: function() {
    var view = new SigninView({
      model: UserModel
    });

    $('#primary').html(view.render().el);
  },

  signup: function() {
    var view = new SignupView({
      model: UserModel
    });

    $('#primary').html(view.render().el);
  },

  listUsers: function() {
    var view = new UserView({
      model: UserModel,
      collection: Users
    });

    $('#primary').html(view.render().el);
  },

  feed: function() {
    var view = new FeedView({
      model: UserModel
    });

    $('#primary').html(view.render().el);
  },

  new: function() {
    var view = new SigninView({
    model: User
  });

    $('#primary').html(view.render().el);
  }

});

export default new Router();
