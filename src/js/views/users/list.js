import ProfileView from './profile-view';

let html = `
  <h2>Users</h2>
`;

let UsersListView = Backbone.View.extend({
  template: _.template(html),

  render() {
    this.$el.html(this.template());

    this.collection.each(function(user) {
      var view = new ProfileView({
        model: UserModel
      });

      this.$el.append(view.render().el);
    }, this);

    return this;
  }
});

export default UsersListView;
