import TweetsCollection from '../collections/tweets';
import TweetView from '../views/tweet-view';
import Friends from '../collections/friends.js';
import FriendView from '../views/friend-view';
import SigninView from '../views/signin-view';
import SignupView from '../views/signup-view';
import TweetModel from '../models/tweet-model';
import FriendModel from '../models/friend-model';
import UserModel from '../models/user-model';

let Router = Backbone.Router.extend({

  routes: {
    '': 'signup',
    'users/signin': 'signin',
    'users/signup': 'signup',
    'users/listUsers': 'listFriends',
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
      collection: collection
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
    var collection = new TweetsCollection();
    var view = new TweetView({
      collection: collection,
      model: TweetModel
    });

    collection.fetch({
      success: function() {
        $('#primary').html(view.render().el);
      },

      error: function() {
        alert('Error getting tweets.');
      }
    });
  },

  new: function() {
    var view = new SigninView({
    model: UserModel
  });

    $('#primary').html(view.render().el);
  }

});

export default new Router();
