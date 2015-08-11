import FeedView from './feed-view';

let html = `
  <h2>Tweets</h2>
`;

let FeedListView = Backbone.View.extend({
  template: _.template(html),
  className: 'tweets',

  initialize() {
    this.listenTo(this.collection, 'add', this.render);
  },

  render() {
    this.$el.empty();

    this.collection.each(function(tweet) {
      var view = new FeedView({
        model: tweet
      });

      this.$el.append(view.render().el);
    }, this);

    return this;
  }
});

export default FeedListView;
