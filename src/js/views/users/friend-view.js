import Router from '../../routers/router'
import ProfileView from './profile-view';

let FriendView = Backbone.View.extend({
  template: _.template(`<h1>Friends</h1>`),
  className: 'user-list',

  render: function() {
    this.$el.html(this.template());

    this.collection.each(function(friend) {
      var view = new ProfileView({
        model: friend
      })
      this.$el.append(view.render().el);
    }, this);

    return this;
  }
});

export default FriendView;
