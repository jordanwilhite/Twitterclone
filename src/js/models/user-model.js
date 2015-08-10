import BaseModel from './base-model';

let UserModel = Backbone.Model.extend({

  url: 'https://twitterfeeder.herokuapp.com/users',

  defaults: {
    email: '',
    username: '',
    fullname: '',
    accessToken: null,
    user: 0,
    tokenType: null,
    expiresIn: 0,
    refreshToken: null
  },

  initialize() {
    this.fetch({
      success(model) {
        if (model.isLoggedIn()) {
          model._loginSuccess();
        }
      }
    })
  },

  refreshAuth() {
    _.delay(() => {
      alert('token expired...time to fetch a new one');
    }, this.get('expiresIn') * 1000);
  },

  isLoggedIn() {
    return !!this.get('accessToken');
  },

  users: function() {
    $.ajax('http://tiy-twitter.herokuapp.com/users', {
      method: 'GET',
      data: {

        //jscs:disable requireCamelCaseOrUpperCaseIdentifiers
        name: attributes.full_name,
        username: attributes.user_name

        //jscs:enable requireCamelCaseOrUpperCaseIdentifiers

      }
    })
  },

  signin: function(credentials) {
    $.ajax('https://twitterfeeder.herokuapp.com/oauth/token', {
      method: 'POST',
      data: {
        email: credentials.email,
        password: credentials.password,

        // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
        grant_type: 'password'

        // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
      }
    }).done(this.signinSuccess.bind(this))
      .fail(this.signinFail.bind(this));
  },

  signinSuccess: function(response) {
    if (response) {
      this.set({
        email: response.email,

        // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
        accessToken: response.access_token,
        refreshToken: response.refresh_token,
        tokenType: response.token_type,
        expiresIn: response.expires_in

        // jscs:disable requireCamelCaseOrUpperCaseIdentifiers

      });
    }

    this.refreshAuth();

    this.trigger('signin', {
      success: true,
      user: this
    });
  },

  signinFail: function(xhr, textStatus, errorThrown) {
    alert('There was an error logging you in.\nError:' + errorThrown);

    this.trigger('login', {
      success: false,
      error: errorThrown,
      user: this
    });
  },

  signup: function(credentials) {
    $.ajax({
      method: 'POST',
      url: 'https://twitterfeeder.herokuapp.com/users',
      dataType: 'json',
      data: {
        user: {

          //jscs:disable requireCamelCaseOrUpperCaseIdentifiers
          email: credentials.email,
          password: credentials.password,
          name: credentials.full_name,
          username: credentials.user_name

          //jscs:disable requireCamelCaseOrUpperCaseIdentifiers
        }
      }
    }).done(this.signupSuccess.bind(this))
      .fail(this.signupFail.bind(this));
  },

  signupSuccess: function(data) {
    this.trigger('signup', {success: true, user: this});
    this.signin(this.get('credentials'));
  },

  signupFail: function(xhr, textStatus, errorThrown) {
    this.trigger('signup', {success: false, error: errorThrown})
  }

});

export default new UserModel();
