let html = `
  <h2>
  <% if(full_name) { %>
    <%- full_name %>
  <% } else {%>
    Anonymous
  <% } %>
  </h2>
  <p><%- user_name %></p>
  <button type="button">Follow</button>
`;
let ProfileView = Backbone.View.extend({

  template: _.template(html),

  className: 'users',

  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});

export default ProfileView;
