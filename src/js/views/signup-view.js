'use strict';

import Router from '../routers/router.js'
import UserModel from '../models/user-model';

var SignupView = Backbone.View.extend({
  template: _.template($('#signup').html()),

  events: {
    'click button': 'onSubmit'
  },

  initialize: function() {
    this.listenTo(this.model, 'signup', this.onSignup);
  },

  onSubmit: function() {
    var $signinName = this.$('#name');
    var $signinEmail = this.$('#email');
    var $signinPassword = this.$('#password');
    var $signinPasswordConfirm = this.$('#password-confirm');
    var $signinUsername = this.$('#username');

    // if the passwords match create a new instance of User &
    // set it's values on the object
    if ($signinPassword.val() === $signinPasswordConfirm.val()) {
      var user = new UserModel({
        email: $signinEmail.val(),
        password: $signinPassword.val(),
        username: $signinUsername.val(),
        name: $signinName.val()
      });

      // Save the user to the server via the api
      user.save();
      Router.navigate('feed', {trigger: true});

    } else {
      alert('Your passwords do not match. Try again.');
    }

  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

export default SignupView;
