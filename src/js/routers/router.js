'use strict';

import SigninView from '../views/signin-view';
import SignupView from '../views/signup-view';
import UserModel from '../models/user-model';

var Router = Backbone.Router.extend({

  routes: {
    '': 'home',
    'users/sigin': 'signin',
    'users/register': 'signup'
  },

  home: function() {
    $('.app main').html('Welcome to the Twitterz!');
  },

  signin: function() {
    var view = new SigninView({
      model: new UserModel
    })
    $('.app main').html(view.render().el);
  },

  signup: function(query, page) {
    var view = new SignupView({
      model: new UserModel
    })
    $('.app main').html(view.render().el);
  }

});

export default new Router();
