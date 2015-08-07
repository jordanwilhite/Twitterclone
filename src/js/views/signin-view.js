import Router from '../routers/router';

let SigninView = Backbone.View.extend({
  template: _.template($('#signin').html()),
  className: "sign-in",

  events: {
    'click button': 'onSubmit'
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  onSubmit: function(e) {
    var email = this.$('.email-input').val();
    var password = this.$('.password-input').val();

    if (email && password) {
      this.model.signin({
        email: email,
        password: password
      });
    } else {
      alert('Error: Username and Password');
    }
    e.preventDefault();
  }

});

export default SigninView;
