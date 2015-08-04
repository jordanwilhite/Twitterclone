import Router from '../routers/router.js'
import UserModel from '../models/user-model';
import FriendModel from '../models/friend-model';
import TweetsCollection from '.../collections/tweets';
import TweetModel from '../models/tweet-model';

let TweetView = Backbone.View.extend({
  template: _.template($('#feed-me').html()),

  tagName: 'ul',

  initialize: function(){
    this.listenTo(this.collection, 'tweet', this.respose);
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
