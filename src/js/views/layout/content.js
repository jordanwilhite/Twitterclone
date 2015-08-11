let html = `
  <h3>Content.</h3>
`;

let Content = Backbone.View.extend({
  tagName: 'main',
  className: 'content',
  template: _.template(html),
  render() {
    this.$el.html(this.template());

    return this;
  }
});

export default Content;
