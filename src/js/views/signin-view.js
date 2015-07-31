'use strict';

import Router from '../routers/router.js'
import UserModel from '../models/user-model';
import Users from '../collections/users';

var SigninView = Backbone.View.extend({
  template: _.template($('#signView').html()),

  events: {
    'click button': 'onSubmit'
  },

  initialize: function() {
    this.listenTo(this.model, 'signin', this.onSignin);
  },

  onSubmit: function() {
    var $signinEmail = this.$('#user-email');
    var $signinPassword = this.$('#user-password');

    if ($signinEmail.val() && $signinPassword.val()) {
      this.model.login({
        email: $signinEmail.val(),
        password: $signinPassword.val()
      });
    } else {
      alert('Error: Username and Password');
    };
  },

  onLogin: function(data){
    if (data.success) {
      Router.navigate('feed', {trigger: true});
    } else {
      console.log(data);
      alert('There was a problem logging you in. Please try again.\n' + data.error);
    }
  },

  render: function() {
    
  }

});

export default SigninView;
