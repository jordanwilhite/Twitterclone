import TweetsCollection from '../collections/tweets';
import Router from '../routers/router';

let TweetModel = Backbone.Model.extend({
  defaults: {
    createdAt: '',
    postedAt: '',
    tweet: ''
  },

  parse: function(response) {
    var data = {
      user: response.user_id,
      body: response.attributes.body,
      id: response.id,
      body: response.attributes.body,
      tweetId: response.tweetId
    }
  },

  tweet: function(tweets) {
    $ajax ({
      type: "POST",
      url: "https://twitterfeeder.herokuapp.com",
      dataType: "json",
      success: function(data){
        _.done(this.postSuccess.bind(this))
        .fail(this.postFail.bind(this));
      }
    });
  },

  postSuccess: function(data){
    var data = {
      createdAt: '',
      postedAt: '',
      body: '',
      tweetId: ''
    };

    this.set({
      createdAt: data.createdAt,
      postedAt: data.postedAt,
      body: data.body
    });
  }
});

  export default TweetModel;
