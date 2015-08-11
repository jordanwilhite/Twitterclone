import UserModel from '../models/user-model';

let BaseCollection = Backbone.Collection.extend({
  sync(method, model, options) {
    if (UserModel.isLoggedIn()) {
      options.headers = {
        'Authorization': 'Bearer ' + UserModel.get('accessToken')
      };
    }

    Backbone.sync.call(this, method, model, options);
  }
});

export default BaseCollection;
