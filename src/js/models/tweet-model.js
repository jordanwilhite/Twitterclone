import BaseModel from './base-model';

let TweetModel = Backbone.Model.extend({
  defaults: {
    createdAt: '',
    postedAt: '',
    body: ''
  },

  parse: function(response) {
    var data = {
      user: response.user_id,
      body: response.attributes.body,
      id: response.id,
      tweetId: response.tweetId
    }
  },

  tweet: function(tweets) {
    $ajax ({
      type: "POST",
      url: "https://twitterfeeder.herokuapp.com/messages",
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
