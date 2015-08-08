import Router from '../../routers/router.js';

let html = `
<h1>Join Today</h1>
<form>
  <input type="text" id="name" placeholder="Full Name">
  <input type="email" id="email" placeholder="Email">
  <input type="password" id="password" placeholder="Password">
  <input type="password" id="password-confirm" placeholder="Confirm Your Password">
  <input type="text" id="username" placeholder="Username">
  <button type="button" id="register">Sign up</button>
</form>
`;

let SignupView = Backbone.View.extend({
  template: _.template(html),
  className: "sign-up",
  events: {
    'click #register': 'onSubmit'
  },

  onSubmit(e) {
    var name = this.$('#name').val();
    var email = this.$('#email').val();
    var password = this.$('#password').val();
    var passwordConfirmation = this.$('#password-confirm').val();
    var username = this.$('#username').val();

    if (name && email && password && passwordConfirmation && username && (password === passwordConfirmation)) {
      this.model.signup({
        name: name,
        email: email,
        password: password,
        username: username
      });
    }
    e.preventDefault();
  },

  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

export default SignupView;
