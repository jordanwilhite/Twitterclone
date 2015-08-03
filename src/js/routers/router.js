// import FeedView from '../views/feed-view';
// import TweetView from '../views/tweet-view';
import Friends from '../collections/friends.js';
import UserView from '../views/friend-view';
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

  listFriends: function() {
    var collection = new Friends

    var view = new FriendView({
      collection: collection
    })

    collection.fetch({

    });
  },

  feed: function() {
    var view = new FeedView({
      model: UserModel
    });

    $('#primary').html(view.render().el);
  },

  new: function() {
    var view = new SigninView({
    model: UserModel
  });

    $('#primary').html(view.render().el);
  }

});

export default new Router();
