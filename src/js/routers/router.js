// Models
import UserModel from '../models/user-model';

// Views
import TweetView from '../views/tweet-view';
import FriendView from '../views/friend-view';
import SigninView from '../views/signin-view';
import SignupView from '../views/signup-view';

// Collections
import TweetsCollection from '../collections/tweets';
import Friends from '../collections/friends.js';

let Router = Backbone.Router.extend({

  routes: {
    '': 'signup',
    'users/signin': 'signin',
    'users/signup': 'signup',
    'users/listUsers': 'listFriends',
    'feed': 'feed',
    'feed/new': 'new'
  },

  initialize: function() {
    this.listenTo(UserModel, 'signin', (data) => {
      if (data.success) {
        this.navigate('feed', {trigger: true});
      }
    });
  },

  signin: function() {
    if (UserModel.isLoggedIn()) {
      this.navigate('feed', {
        trigger: true,
        replace: true
      });
      return false;
    }

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
