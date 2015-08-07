import Router from '../routers/router.js'
import TweetsCollection from '../collections/tweets';
import TweetModel from '../models/tweet-model';

let html = `
  <h2>Create a Twitterz</h2>
`;


let TweetView = Backbone.View.extend({
  template: _.template(html),
  className: 'tweet',

  tagName: 'ul',

  initialize: function(){
    this.listenTo(this.collection, 'add', this.addAll);
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
