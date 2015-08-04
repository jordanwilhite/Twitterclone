import FeedView from '../views/feed-view';
import TweetView from '../views/tweet-view';
import Friends from '../collections/friends.js';
import FriendView from '../views/friend-view';
import SigninView from '../views/signin-view';
import SignupView from '../views/signup-view';
import FriendModel from '../models/friend-model';
import UserModel from '../models/user-model';

let Router = Backbone.Router.extend({

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
    var collection = new Friends();
    var view = new FriendView({
      collection: collection,
      model: FriendModel
    });

    collection.fetch({
      success: function() {
        $('#primary').html(view.render().el);
      },

      error: function() {
        alert('Error getting users.');
      }
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
