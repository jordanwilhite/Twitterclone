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

    if (UserModel.isLoggedIn() && body) {
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

export default TweetView;
