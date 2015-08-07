import TweetModel from '../models/tweet-model';
import BaseCollection from './base';  

let TweetsCollection = Backbone.Collection.extend({
  url: 'https://twitterfeeder.herokuapp.com/messages',

  model: TweetModel,

  parse: function(response) {
    if(response.data) {
      return response.data;
    } else {
      return response;
    }
  }
});

export default TweetsCollection;
