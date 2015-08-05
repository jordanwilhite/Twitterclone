let html = `

  <h2>
  <% if(user_name) { %>
    <%- user_name %>
  <% } else {%>
    Anonymous
  <% } %>
  </h2>

  <p><%- email %></p>
`;
let ProfileView = Backbone.View.extend({

  template: _.template(html),

  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});

export default ProfileView;
