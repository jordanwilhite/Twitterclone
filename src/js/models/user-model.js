import BaseModel from './base';

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
    refreshToken: null
  },

  initialize() {
    this.fetch({
      success(model) {
        if(model.isSignedIn) {

          model._signinSuccess();
        }
      }
    })
  },

  refreshAuth() {
  _.delay(() => {
    alert('token expired...time to fetch a new one');
  }, this.get('expiresIn') * 1000);
},

  isSignedIn() {
    return !!this.get('accessToken');
  },

  signin(credentials) {
    if (this.get('credentials')) {
      this.set('credentials', {});
    }

    if (credentials) {
      this.set({
        email: credentials.email
      });
      $.ajax('https://twitterfeeder.herokuapp.com/oauth/token', {
        method: 'POST',
        dataType: 'json',
        data: {
          email: credentials.email,
          password: credentials.password,
          grant_type: "password"
        }
      }).done(this._signinSuccess.bind(this))
        .fail(this._signinFail.bind(this));
    }
  },

  signup(credentials) {
    if (credentials) {
      $.ajax('https://twitterfeeder.herokuapp.com/users', {
        method: 'POST',
        dataType: 'json',
        data: {
          user: {
            email: credentials.email,
            password: credentials.password,
            name: credentials.name,
            username: credentials.username
          }
        }
      }).done(this._signupSuccess.bind(this))
        .fail(this._signupFail.bind(this));
    }
  },

  _signupSuccess(data) {
    this.trigger('signup', {success: true, user: this});
    this.signin(this.get('credentials'));
  },

  _signupFail(xhr, textStatus, errorThrown) {
    this.trigger('signup', {success: false, error: errorThrown});
  },

  _signinSuccess(response) {
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
      user: this
    });
  },

  _signinFail(xhr, textStatus, errorThrown) {
    alert('Error logging in. \nError:' + errorThrown);

    this.trigger('signin', {
      success: false,
      error: errorThrown,
      user: this
    });
  }
});

// let UserModel = Backbone.Model.extend({
//   url: 'https://twitterfeeder.herokuapp.com/users',
//
//   defaults: {
//     email: '',
//     username: '',
//     name: '',
//     userId: ''
//   },
//
//   signin: function(credentials) {
//     $.ajax({
//       type: 'POST',
//       url: 'https://twitterfeeder.herokuapp.com/oauth/token',
//       dataType: 'json',
//       data: {
//         email: credentials.email,
//         password: credentials.password,
//         grant_type: "password"
//       }
//     }).done(this.signinSuccess.bind(this))
//       .fail(this.signinFail.bind(this));
//   },
//
//   signinSuccess: function(data) {
//     console.log(data);
//
//     this.set({
//       email: data.email
//     });
//
//     this.trigger('signin', {success: true, user: data});
//   },
//
//   signinFail: function(jqXHR, textStatus, errorThrown) {
//     console.log('signup fail', {success: false}, errorThrown);
//   },
//
//   signup: function(credentials) {
//     $.ajax({
//       method: 'POST',
//       url: 'https://twitterfeeder.herokuapp.com/users',
//       dataType: 'json',
//       data: {
//         user: {
//           email: credentials.email,
//           password: credentials.password,
//           passwordConfirm: credentials.passwordConfirm,
//           name: credentials.name,
//           username: credentials.username
//         }
//       }
//     }).done(this.signupSuccess.bind(this))
//       .fail(this.signupFail.bind(this));
//   },
//
//   signupSuccess: function(data) {
//
//     this.set({
//       email: data.attributes.email,
//       name: data.attributes.full_name,
//       username: data.attributes.user_name,
//       password: data.attributes.password,
//     });
//
//     this.trigger('signup', {success: true, user: data});
//   },
//
//   signupFail: function(xhr, textStatus, errorThrown) {
//     console.log('signup fail', {success: false}, errorThrown);
//   },
//
// });

export default new UserModel();
