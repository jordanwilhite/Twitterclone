let FriendModel = Backbone.Model.extend({
  defaults: {
    name: '',
    username: ''
  },

  parse: function(response) {
    var data = response.attributes;
    return data;
  },

  listFriends: function(data) {
    $.ajax({
      method: 'GET',
      url: 'https://twitterfeeder.herokuapp.com/users',
      dataType: 'json',
      data: {
        user: {
          username: data.attributes.user_name,
          name: data.attributes.name
        }
      }
    }).done(this.listUsersSuccess.bind(this))
    .fail(this.listUsersFail.bind(this));
  },

  listFriendsSuccess: function(response) {
    console.log('success!', data);
  },

  listFriendsFail: function(xhr, textStatus, errorThrown) {
    console.log('listUsers fail', errorThrown);
  }

});

export default FriendModel;
