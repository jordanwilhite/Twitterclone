import BaseCollection from './base';
import FriendModel from '../models/friend-model';

let Friends = BaseCollection.extend({
  model: FriendModel,
  url: 'https://twitterfeeder.herokuapp.com/users',

  parse(response) {
    if (response.data) {
      return response.data;
    }
    return response;
  }
});

export default Friends;
