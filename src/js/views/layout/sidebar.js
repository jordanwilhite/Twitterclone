let html = `
  <h3>Sidebar</h3>
`;
let Content = Backbone.View.extend({
  tagName: 'aside',
  className: 'sidebar',
  template: _.template(html),
  render() {
    this.$el.html(this.template());

    return this;
  }
});

export default Content;
