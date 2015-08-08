import UserModel from '../../models/user-model';

let html = `
<form class="tweet-form">
  <input type="text" placeholder="What's Happening?">
  <button type="submit">Tweet</button>
</form>
`;

let TweetView = Backbone.View.extend({
  template: _.template(html),
  className: 'tweet-box',

  events: {
    'click button': 'onSubmit'
  },

  onSubmit() {
    var $input = this.$('input');
    var body = $input.val();

    if (UserModel.isSignedIn() && body) {
      this.collection.add({
        user: UserModel.get('id'),
        body: body
      });

      $input.val('');
    }
  },

  render() {
    this.$el.html(this.template());
    return this;
  }
});

// import Router from '../routers/router.js'
// import UserModel from '../models/user-model';
// import FriendModel from '../models/friend-model';
// import TweetsCollection from '../collections/tweets';
// import TweetModel from '../models/tweet-model';
// import Friends from '../collections/friends';
//
//
// let TweetView = Backbone.View.extend({
//   template: _.template($('#feed-me').html()),
//   className: 'tweet',
//
//   tagName: 'ul',
//
//   initialize: function(){
//     this.listenTo(this.collection, 'tweet', this.addAll);
//   },
//
//   addAll: function() {
//     this.collection.each(function(tweet) {
//       this.TweetView(tweet);
//     }, this);
//   },
//
//   render: function() {
//     return this;
//   }
// });

export default TweetView;
