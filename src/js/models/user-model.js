let UserModel = Backbone.Model.extend({

  url: 'https://twitterfeeder.herokuapp.com/users',

  defaults: {
    email: '',
    username: '',
    name: '',
    userId: '',
    accessToken: ''
  },

  signin: function(credentials) {
    $.ajax({
      type: 'POST',
      url: 'https://twitterfeeder.herokuapp.com/oauth/token',
      dataType: 'json',
      data: {
        email: credentials.email,
        password: credentials.password,
        grant_type: "password"
      }
    }).done(this.signinSuccess.bind(this))
      .fail(this.signinFail.bind(this));
  },

  signinSuccess: function(data) {
    console.log(data);

    this.set({
      email: data.email
    });

    this.trigger('signin', {success: true, user: data});
  },

  signinFail: function(jqXHR, textStatus, errorThrown) {
    console.log('signup fail', {success: false}, errorThrown);
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
          passwordConfirm: credentials.passwordConfirm,
          name: credentials.name,
          username: credentials.username
        }
      }
    }).done(this.signupSuccess.bind(this))
      .fail(this.signupFail.bind(this));
  },

  signupSuccess: function(data) {

    this.set({
      email: data.attributes.email,
      name: data.attributes.full_name,
      username: data.attributes.user_name,
      password: data.attributes.password,
    });

    this.trigger('signup', {success: true, user: data});
  },

  signupFail: function(xhr, textStatus, errorThrown) {
    console.log('signup fail', {success: false}, errorThrown);
  },

});

export default new UserModel();
