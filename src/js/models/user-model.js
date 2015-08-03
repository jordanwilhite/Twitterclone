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
      type: "POST",
      url: "https://twitterfeeder.herokuapp.com/users/oauth/token",
      dataType: "json",
      success: function(data) {
        _.done(this.signinSuccess.bind(this))
        .fail(this.signinFail.bind(this));
      }
    })
  },

  signinSuccess: function(data) {
    console.log(data);
    var data = {
      email: ''
    };

    this.set({
      email: data.email
    });

    this.trigger('signin', {success: true, user: data});
  },

  signinFail: function(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR); console.log(textStatus); console.log(errorThrown);
  }
  // {
  //   this.trigger('signin', {success: false, error: errorThrown});
  // }
});

export default new UserModel();
