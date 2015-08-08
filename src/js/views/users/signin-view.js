import Router from '../../routers/router';

let html = `
<h1>Log In To Your Account</h1>
<input type="email" placeholder="Email" class="email-input">
<input type="password" placeholder="Password" class="password-input">
<div class="remember-forgot">
  <label>
    <input type="checkbox">
    <span>Remember me</span>
  </label>
  <a href="#">Forgot Password?</a>
</div>
<button type="button" class="submit-input">Log in</button>
`;

let SigninView = Backbone.View.extend({
  template: _.template(html),
  className: "sign-in",

  events: {
    'click .submit-input': 'signin'
  },

  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  signin(e) {
    var email = this.$('.email-input').val();
    var password = this.$('.password-input').val();

    if (email && password) {
      this.model.signin({
        email: email,
        password: password
      });
    }

    e.preventDefault();
  }
});

// 'use strict';
//
// import UserModel from '../models/user-model';
// import Router from '../routers/router';
// import Users from '../collections/friends';
//
// var SigninView = Backbone.View.extend({
//   template: _.template($('#signin').html()),
//   className: "sign-in",
//
//   events: {
//     'click button': 'onSubmit'
//   },
//
//   initialize: function() {
//     this.listenTo(this.model, 'signin', this.onSignin);
//   },
//
//   onSubmit: function() {
//     var email = this.$('.email-input').val();
//     var password = this.$('.password-input').val();
//
//     if (email && password) {
//       this.model.signin({
//         email: email,
//         password: password
//       });
//     } else {
//       alert('Error: Username and Password');
//     }
//   },
//
//   onSignin: function(data) {
//     if (data.success) {
//       Router.navigate('feed', {trigger: true});
//     } else {
//       console.log(data);
//       alert('There was a problem logging you in. Please try again.' + data.error);
//     }
//   },
//
//   render: function() {
//     this.$el.html(this.template());
//     return this;
//   }
//
// });

export default SigninView;
