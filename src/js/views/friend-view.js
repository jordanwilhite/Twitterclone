import Friend from '../models/friend-model';
import Router from '../routers/router';
import ProfileView from './profile-view';

let html = `
  <div class="users-list">
    <h1>Friends</h1>
  </div>
`;
let FriendView = Backbone.View.extend({
  template: _.template(html),

  render: function() {
    this.$el.html(this.template());

    this.collection.each((users) => {
      var view = new ProfileView({
        model: users
      })
      this.$('.users-list').append(view.render().el);
    });

    return this;
  }
});

export default FriendView;
