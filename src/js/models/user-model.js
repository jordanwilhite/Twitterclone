'use strict';

import SigninView from '../views/signin-view';
import SignupView from '../views/signup-view';
import UserCollection from '../collections/users';

var UserModel = Backbone.Model.extend({
  defaults: {
    name: '',
    email: '',
    username: ''

  }
});

export default UserModel;
