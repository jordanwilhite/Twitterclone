import UserModel from '../../models/user-model';

let html = `
<nav id="nav-login">
  <div class="nav-bar">
    <span class="fa fa-twitter"></span>

    <ul class="left-nav">
      <li>
        <a href="#feed">Feed</a>
      </li>
      <li>
        <a href="#users/listUsers">Users</a>
      </li>
    </ul>

    <ul class="right-nav">
      <li>
        <a href="#users/signin">Sign In</a>
      </li>
      <li>
        <a href="#users/signup">Sign Up</a>
      </li>
    </ul>
  </div>
</nav>
`;

let Header = Backbone.View.extend({
  tagName: 'header',
  template: _.template(html),

  initialize() {
    this.listenTo(UserModel, 'signin', this.render);
  },

  render() {
    this.$el.html(this.template());
    return this;
  }
});

export default Header;
