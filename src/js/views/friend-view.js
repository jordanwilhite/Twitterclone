import FriendModel from '../models/friend-model';
import Router from '../routers/router';
import Friends from '../collections/friends';

let FriendView = Backbone.View.extend({
  template: _.template($('#users-list').html()),

  tagName: 'ul',

  render: function() {
    this.$el.html(this.template());

    this.collection.each((user) => {
      var view = new FriendsView({
        model: user
      })
      this.$('#users-list').append(view.render().el);
    });

    return this;
  }
});

export default FriendView;
