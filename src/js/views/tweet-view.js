'use strict'

import Router from '../routers/router.js'
import Usermodel from '../models/user-model';
import Users frim '../collections/users';

let TweetsView = Backbone.View.entend({
  template = _.template($('#twitterfeed').html()),

  tagName 'ul',

  initialize: function(){
    this.listenTo(this.collection 'TweetCollection', this.respose);
  },

  addAll: function:() {
    this.collection.each(function(tweet) {
      this.FeedView(tweet);
    }, this);
  }
  
  render: function() {
    return this;
  }
}
});

export default UserView;
