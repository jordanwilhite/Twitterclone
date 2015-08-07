import BaseModel from './base-model';

let UserModel = Backbone.Model.extend({

  url: 'https://twitterfeeder.herokuapp.com/users',

  defaults: {
    email: '',
    username: '',
    name: '',
    accessToken: null,
    user: 0,
    tokenType: null,
    expiresIn: 0,
    refreshToken: null,
  },

  initialize() {
    this.fetch({
      success(model) {
        if(model.isLoggedIn()) {
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

  signin: function(credentials) {
    if (this.get('credentials')) {
      this.set('credentials', {});
    }

    if (credentials) {
      this.set({
        email: credentials.email
      });
      $.ajax({
        method: 'POST',
        url: 'https://twitterfeeder.herokuapp.com/oauth/token',
        dataType: 'json',
        data: {
          email: credentials.email,
          password: credentials.password,
          grant_type: "password"
        }
      }).done(this.signinSuccess.bind(this))
        .fail(this.signinFail.bind(this));
    }
  },

  signinSuccess: function(response) {
    if (response) {
    this.set({
      accessToken: response.access_token,
      refreshToken: response.refresh_token,
      tokenType: response.token_type,
      expiresIn: response.expires_in
    });

    this.save();
    }

    this.refreshAuth();

    this.trigger('signin', {
      success: true,
      user: data
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
          email: credentials.email,
          password: credentials.password,
          name: credentials.full_name,
          username: credentials.user_name
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
  },

});

export default new UserModel();
