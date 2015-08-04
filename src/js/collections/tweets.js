import TweetModel from '../models/tweet-model';
import TweetView from '../views/tweet-view';
import Router from '../routers/router';

let TweetsCollection = Backbone.Collection.extend;({
  url: 'https://twitterfeeder.herokuapp.com/messages',

  model: TweetModel,

  // parse: function(response) {
  //   if(response.data) {
  //     return response.data;
  //   } else {
  //     return response;
  //
  //     parse : function(response) {
  //       var data = {
  //         user: response.attributes.user_id,
  //         body: response.attributes.body,
  //         id: response.id
    }
  }
});

export default TweetsCollection;
