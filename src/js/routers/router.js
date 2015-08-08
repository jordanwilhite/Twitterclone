import UserModel from '../models/user-model';

import AppView from '../views/app';
import SigninView from '../views/users/signin-view';
import SignupView from '../views/users/signup-view';
import UsersListView from '../views/users/list';
import FeedListView from '../views/feed/list';
import TweetView from '../views/feed/tweet-view';

import TweetsCollection from '../collections/tweets';
import Friends from '../collections/friends';

let Router = Backbone.Router.extend({
  routes: {
    '': 'signup',
    'users/signin': 'signin',
    'users/signup': 'signup',
    'feed': 'feed'
  },

  initialize() {
    this.listenTo(UserModel, 'signin', (data) => {
      if (data.success) {
        this.navigate('feed', {trigger: true})
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
      }
    });
  },

  signin() {
    if (UserModel.isSignedIn()) {
      this.navigate('feed', {trigger: true, replace: true});
      return false;
    }

    var view = new SigninView({
      model: UserModel
    });

    AppView.setContent(view.render().el);
  },

  signup() {
    var view = new SignupView({
      model: UserModel
    });

    AppView.setContent(view.render().el);
  },

  users() {
    var collection = new Friends([
      {email: 'jeremy@gmail.com', following: true},
      {email: 'jordan@gmail.com'}
    ]);

    var view = new UsersListView({
      collection: collection
    });

    collection.fetch({
      success(){
        AppView.setContent(view.render().el);
      }
    });
  }
});

// import TweetsCollection from '../collections/tweets';
// import TweetView from '../views/tweet-view';
// import Friends from '../collections/friends.js';
// import FriendView from '../views/friend-view';
// import SigninView from '../views/signin-view';
// import SignupView from '../views/signup-view';
// import TweetModel from '../models/tweet-model';
// import FriendModel from '../models/friend-model';
// import UserModel from '../models/user-model';
//
// let Router = Backbone.Router.extend({
//
//   routes: {
//     '': 'signup',
//     'users/signin': 'signin',
//     'users/signup': 'signup',
//     'users/listUsers': 'listFriends',
//     'feed': 'feed',
//     'feed/new': 'new'
//   },
//
//   signin: function() {
//     var view = new SigninView({
//       model: UserModel
//     });
//
//     $('#primary').html(view.render().el);
//   },
//
//   signup: function() {
//     var view = new SignupView({
//       model: UserModel
//     });
//
//     $('#primary').html(view.render().el);
//   },
//
//   listFriends: function() {
//     var collection = new Friends();
//
//     var view = new FriendView({
//       collection: collection
//     });
//
//     collection.fetch({
//       success: function() {
//         $('#primary').html(view.render().el);
//       },
//
//       error: function() {
//         alert('Error getting users.');
//       }
//     });
//   },
//
//   feed: function() {
//     var collection = new TweetsCollection();
//     var view = new TweetView({
//       collection: collection,
//       model: TweetModel
//     });
//
//     collection.fetch({
//       success: function() {
//         $('.twitter-feed').html(view.render().el);
//       },
//
//       error: function() {
//         alert('Error getting tweets.');
//       }
//     });
//   },
//
//   new: function() {
//     var view = new SigninView({
//     model: UserModel
//   });
//
//     $('#primary').html(view.render().el);
//   }
//
// });

export default new Router();
