import FriendModel from '../models/friend-model';
import FriendView from '../views/friend-view';
import Router from '../routers/router';

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
