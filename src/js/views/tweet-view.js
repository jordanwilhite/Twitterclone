import Router from '../routers/router.js'
import UserModel from '../models/user-model';
import FriendModel from '../models/friend-model';
import TweetsCollection from '../collections/tweets';
import TweetModel from '../models/tweet-model';
import Friends from '../collections/friends';


let TweetView = Backbone.View.extend({
  template: _.template($('#feed-me').html()),
  className: 'tweet',

  tagName: 'ul',

  initialize: function(){
    this.listenTo(this.collection, 'tweet', this.addAll);
  },

  addAll: function() {
    this.collection.each(function(tweet) {
      this.TweetView(tweet);
    }, this);
  },

  render: function() {
    return this;
  }
});

export default TweetView;
