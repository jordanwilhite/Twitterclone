import UserModel from '../models/user-model';

// Views
import AppView from '../views/app';
import TweetView from '../views/feed/tweet-view';
import FriendView from '../views/users/friend-view';
import SigninView from '../views/users/signin-view';
import SignupView from '../views/users/signup-view';
import FeedListView from '../views/feed/list';

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

  feed() {
    var collection = new TweetsCollection();

    var view = new FeedListView({
      collection: collection
    });

    var newTweet = new TweetView({
      collection: collection
    });

    collection.fetch({
      success(){
        AppView.setContent(view.render().el);
        AppView.setSidebar(newTweet.render().el);
        $('.sidebar').show();
      }
    });
  },

  signin() {
    if (UserModel.isLoggedIn()) {
      this.navigate('feed', {trigger: true, replace: true});
      return false;
    }

    var view = new SigninView({
      model: UserModel
    });

    AppView.setContent(view.render().el);
    $('.sidebar').hide();
  },

  signup() {
    var view = new SignupView({
      model: UserModel
    });

    AppView.setContent(view.render().el);
    $('.sidebar').hide();
  },

  listFriends() {
    var collection = new Friends();

    var view = new FriendView({
      collection: collection,
      model: UserModel
    });

    collection.fetch({
      success(){
        AppView.setContent(view.render().el);
        $('.sidebar').hide();
      },

      error(){
        alert('Error getting users.');
      }
    });
  }
});

export default new Router();
