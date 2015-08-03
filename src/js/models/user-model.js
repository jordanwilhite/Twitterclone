let UserModel = Backbone.Model.extend({

  url: 'https://twitterfeeder.herokuapp.com/users',

  defaults: {
    email: '',
    username: '',
    name: '',
    userId: ''
  },

  signin: function(credentials) {
    $.ajax({
      method: "POST",
      url: "https://twitterfeeder.herokuapp.com/oauth/token",
      dataType: "json",
      data: {
        mail: credentials.email,
        password: credentials.password,
        grant_type: 'password'
      }
    }).done(this.signinSuccess.bind(this))
      .fail(this.signinFail.bind(this));
  },

  signinSuccess: function(data) {
    console.log(data);

    this.set({
      email: data.email
    });

    this.trigger('signin', {success: true, user: data,});
  },

  signinFail: function(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR); console.log(textStatus); console.log(errorThrown);
  },

  signup: function(credentials) {
    $.ajax({
      method: "POST",
      url: "https://twitterfeeder.herokuapp.com/users",
      dataType: "json",
      data: credentials
    }).done(this.signupSuccess.bind(this))
      .fail(this.signupFail.bind(this));
  },

  signupSuccess: function(response){
    console.log('signup success', response);
  },

  signupFail: function(xhr, textStatus, errorThrown){
    console.log('signup fail', errorThrown);    
  }
});

export default new UserModel();
