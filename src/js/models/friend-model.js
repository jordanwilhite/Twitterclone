import FriendView from '../views/friend-view';
import Friends from '../collections/friends';

let FriendModel = Backbone.Model.extend({

  url: 'https://twitterfeeder.herokuapp.com/users',

  listFriends: function(credentials) {
    $.ajax({
      method: "GET",
      url: "https://twitterfeeder.herokuapp.com/users",
      dataType: "json",
      data: {
        user: {
          username: username.credentials,
          name: name.credentials
        }
      }
    }).done(this.listUsersSuccess.bind(this))
    .fail(this.listUsersFail.bind(this));
  },

  listFriendsSuccess: function(response) {
    console.log('listUsers success', response);
  },

  listFriendsFail: function(xhr, textStatus, errorThrown) {
    console.log('listUsers fail', errorThrown);
  }

});

export default FriendModel;
