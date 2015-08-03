'use strict'

import TweetModel from '../models/tweet-model';

var TweetsCollection Backbone.Collection.extend;({
  url: 'https://twitterfeeder.herokuapp.com/tweets',

  model: TweetModel,

  parse: function(response) {
    if(response.data
  }
});

export default Tweets;
