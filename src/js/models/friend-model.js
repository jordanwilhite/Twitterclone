import BaseModel from './base';

let FriendModel = BaseModel.extend({
  defaults: {
    fullname: '',
    username: ''
  },

  parse(response) {
    return response.attributes;
  },

  follow() {

  },

  unfollow() {

  }
});

export default FriendModel;
