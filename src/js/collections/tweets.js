import BaseCollection from './base';
import TweetModel from '../models/tweet-model';

let TweetsCollection = BaseCollection.extend({
  url: 'https://twitterfeeder.herokuapp.com/messages',
  model: TweetModel,

  parse: function(response) {
    if (response.data) {
      return response.data;
    }
    return response;
  }
});

export default TweetsCollection;
