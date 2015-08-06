import FriendModel from '../models/friend-model';
import Router from '../routers/router';
import Friends from '../collections/friends';
import ProfileView from './profile-view';

let FriendView = Backbone.View.extend({
  template: _.template(`<h1>Friends</h1>`),

  tagName: 'ul',

  render: function() {
    this.$el.html(this.template());

    this.collection.each((friend) => {
      var view = new ProfileView({
        model: friend
      })
  
      this.$el.append(view.render().el);
    });

    return this;
  }
});

export default FriendView;
