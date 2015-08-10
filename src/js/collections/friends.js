import BaseCollection from './base';
import FriendModel from '../models/friend-model';

let Friends = Backbone.Collection.extend({
  url: 'https://twitterfeeder.herokuapp.com/users',

  model: FriendModel,

  parse: function(response) {
    return response.data;
  }
});

export default Friends;
