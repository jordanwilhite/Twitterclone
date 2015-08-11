var html = `
<img src="http://lorempixel.com/48/48/cats/" alt="Avatar" />
<ul>
  <li><h4>Name</h4></li>
  <li><p> username</p></li>
  <li><span>Time</span></li>
</ul>
<p><%- body %></p>
`;

let FeedView = Backbone.View.extend({
  template: _.template(html),
  className: 'tweet',
  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

export default FeedView;
