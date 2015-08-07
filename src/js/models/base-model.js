import UserModel from './user-model';

let BaseModel = Backbone.Model.extend({
  sync(method, model, options) {
    if (User.isLoggedIn()) {
      options.headers = {
        Authorization: 'Bearer ' + User.get('accessToken')
      };
    }

    Backbone.sync.call(this, method, model, options);
  }

});

export default BaseModel;
