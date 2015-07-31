let UserModel = Backbone.Model.extend({

  url: 'https://twitterfeeder.herokuapp.com/users',

  defaults: {
    email: ''
  },
  login: function(credentials) {
    $.ajax('https://twitterfeeder.herokuapp.com/users')
      .done(this.loginSuccess.bind(this))
      .fail(this.loginSuccess.bind(this));
  },

  loginSuccess: function(data) {
    var data = {
      email: ''
    };

    this.set({
      email: data.email
    });

    this.trigger('login', {success: true, user: data});
  },

  loginFail: function(jqXHR, textStatus, errorThrown) {
    this.trigger('login', {success: false, error: errorThrown});
  }
});


export default new UserModel();
