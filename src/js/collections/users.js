'use strict';

import UserModel from '../models/user-model';
import UserView from '../views/user-view';

let Users = Backbone.Collection.extend ({
  url: 'https://twitterfeeder.herokuapp.com/users',

  model: UserModel,

  parse: function(response) {
    if(response.data) {
      return response.data;
    } else {
      return response;
    }
  }

});

export default Users;
