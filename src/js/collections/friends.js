import BaseCollection from './base';
import FriendModel from '../models/friend-model';

let Friends = Backbone.Collection.extend({
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
