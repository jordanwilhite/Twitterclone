'use-strict';

import User from '../models/user-model';
import Router from '../routers/router.js';

var SignupView = Backbone.View.extend({
  template: _.template($('#signup').html()),
  className: "sign-up",

  events: {
    'click button': 'onSubmit'
  },

  initialize: function() {
    this.listenTo(this.model, 'signup', this.onSignup);
  },

  onSubmit: function() {
    var name = this.$('#name').val();
    var email = this.$('#email').val();
    var password = this.$('#password').val();
    var passwordConfirm = this.$('#password-confirm').val();
    var username = this.$('#username').val();

    // if the passwords match create a new instance of User &
    // set it's values on the object
    if (password === passwordConfirm) {

      // Save the user to the server via the api
      User.signup({
        email: email,
        password: password,
        username: username,
        name: name
      });

    } else {
      alert('Your passwords do not match. Try again.');
    }

  },

  onSignup: function(data) {
    if (data.success) {
      Router.navigate('users/listUsers', {trigger: true});
    } else {
      console.log(data);
      alert('There was a problem with your registration. Please try again.' + data.error);
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

export default SignupView;
