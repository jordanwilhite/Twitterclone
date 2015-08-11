import BaseCollection from './base';
import FriendModel from '../models/friend-model';

let Friends = BaseCollection.extend({
  model: FriendModel,
  url: 'https://twitterfeeder.herokuapp.com/users',

  parse: function(response) {
    return response.data;
  }
});

export default Friends;
