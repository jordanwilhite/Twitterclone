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
    let name = this.$('#name').val();
    let email = this.$('#email').val();
    let password = this.$('#password').val();
    let passwordConfirmation = this.$('#password-confirm').val();
    let username = this.$('#username').val();


    // if the passwords match create a new instance of User &
    // set it's values on the object
    if (name && email && password && passwordConfirmation && username && (password === passwordConfirmation)) {

      // Save the user to the server via the api
      this.model.signup({
        name: name,
        email: email,
        password: password,
        username: username
      });
    } else {
      alert('Your passwords do not match. Try again.');
    }
    e.preventDefault();
  },

  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

export default SignupView;
