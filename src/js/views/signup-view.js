import Router from '../routers/router.js';

let SignupView = Backbone.View.extend({
  template: _.template($('#signup').html()),
  className: 'sign-up',

  events: {
    'click button': 'onSubmit'
  },

  onSubmit: function(e) {
    let name = this.$('#name').val();
    let email = this.$('#email').val();
    let password = this.$('#password').val();
    let passwordConfirm = this.$('#password-confirm').val();
    let username = this.$('#username').val();

    // if the passwords match create a new instance of User &
    // set it's values on the object
    if (email && password && passwordConfirm && (password === passwordConfirm)) {

      // Save the user to the server via the api
      this.model.signup({
        email: email,
        password: password,
        username: username,
        name: name
      });

    } else {
      alert('Your passwords do not match. Try again.');
    }

    e.preventDefault();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

export default SignupView;
