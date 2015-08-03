'use strict'

import TweetModel from '../models/tweet-model';
import TweetModel from '../views/tweet-view';

let TweetsCollection = Backbone.Collection.extend;({
  url: 'https://twitterfeeder.herokuapp.com/tweets',

  model: TweetModel,

  parse: function(response) {
    if(response.data) {
      return response.data;
    } else {
      return response;
    }
  }
});

export default Tweets;
