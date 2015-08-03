'use strict';

import FriendModel from '../models/friend-model';
import UserView from '../views/friend-view';

let Friends = Backbone.Collection.extend ({
  url: 'https://twitterfeeder.herokuapp.com/users',

  model: FriendModel,

  parse: function(response) {
    if (response.data) {
      return response.data;
    } else {
      return response;
    }
  }

});

export default Friends;
