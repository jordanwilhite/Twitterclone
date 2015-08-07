'use strict'

import UserModel from '../models/user-model';
import Router from '../routers/router';
import TweetView from '../views/tweet-view';
import TweetsCollection from '../collections/tweets';

let FeedView = Backbone.View.extend({
template: _.template($('#feedview').html()),

tagName: 'ul',

initialize: function() {
  this.listenTo(this.collection, 'TweetsCollection', this.addTweets);

},

addAll: function(){
  this.collection.each(function(user){
    this.addTweets(tweet);
  }, this)

}

addTweets: function() {
  var tweets = new Tweet ({model:tweet-model});
  this.$el.append(view.render().el);
},

});

export default FeedView;
