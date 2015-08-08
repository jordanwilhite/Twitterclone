import UserModel from './user-model';

let BaseModel = Backbone.Model.extend({
  sync(method, model, options) {
    if (UserModel.isSignedIn()) {
      options.headers = {
        'Authorization': 'Bearer ' + UserModel.get('accessToken')
      };
    }
    Backbone.sync.call(this, method, model, options);
  }
})

export default BaseModel;
