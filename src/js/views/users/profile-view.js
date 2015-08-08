import UserModel from '../../models/user-model';

let html = `
<img src="http://lorempixel.com/72/72/cats/" alt="Profile Picture"/>
<a href="#"><h1><% name %></h1></a>
<a href="#"><h2><% user_name %></h2></a>
<button type="button">Follow</button>
`;

let ProfileView = Backbone.View.extend({
  template: _.template(html),
  className: 'profile-card',

  render() {
    this.$el.html(this.template({
      profile: this.model.toJSON(),
      UserModel: UserModel.toJSON()
    }));
    return this;
  }
});

export default ProfileView;
