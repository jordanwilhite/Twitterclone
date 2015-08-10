import Router from '../../routers/router';

let html = `
<h1>Log In To Your Account</h1>
<input type="email" placeholder="Email" class="email-input">
<input type="password" placeholder="Password" class="password-input">
<div class="remember-forgot">
  <label>
    <input type="checkbox">
    <span>Remember me</span>
  </label>
  <a href="#">Forgot Password?</a>
</div>
<button type="button" class="submit-input">Log in</button>
`;

let SigninView = Backbone.View.extend({
  template: _.template(html),
  className: "sign-in",

  events: {
    'click .submit-input': 'onSubmit'
  },

  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  onSubmit(e) {
    var email = this.$('.email-input').val();
    var password = this.$('.password-input').val();

    if (email && password) {
      this.model.signin({
        email: email,
        password: password
      });
    } else {
      alert('Error: Username and Password');
    }

    e.preventDefault();
  }
});

export default SigninView;
