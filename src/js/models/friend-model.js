import BaseModel from './base-model';

let FriendModel = Backbone.Model.extend({
  defaults: {
    fullname: '',
    username: ''
  },

  parse(response) {
    return response.attributes;
  },

  listFriends: function(data) {
    $.ajax({
      method: 'GET',
      url: 'https://twitterfeeder.herokuapp.com/users',
      dataType: 'json',
      data: {
        friend: {

          //jscs:disable requireCamelCaseOrUpperCaseIdentifiers
          username: data.attributes.user_name,
          fullname: data.attributes.full_name

          //jscs:enable requireCamelCaseOrUpperCaseIdentifiers
        }
      }
    }).done(this.listUsersSuccess.bind(this))
    .fail(this.listUsersFail.bind(this));
  },

  listFriendsSuccess: function(response) {
    console.log('listUsers fail', errorThrown);
  }
  
});

export default FriendModel;
