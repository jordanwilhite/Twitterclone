'use strict';

import UserModel from '../models/user-model';

var Users = Backbone.Collection.extend ({
  url: 'https://twitterfeeder.herokuapp.com/users',

  model: UserModel

});

export default Users;
