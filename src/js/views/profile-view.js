import UserModel from '../models/user-model';

let html = `
  <h2>
  <% if(name) { %>
    <%- name %>
  <% } else {%>
    Anonymous
  <% } %>
  </h2>

  <p><%- username %></p>
  <button type="button">Follow</button>
`;
let ProfileView = Backbone.View.extend({

  template: _.template(html),

  className: 'users',

  render() {
    this.$el.html(this.template({
      profile: this.model.toJSON(),
      friend: UserModel.toJSON()
    }));
    return this;
  }

});

export default ProfileView;
