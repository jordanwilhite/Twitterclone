import HeaderView from './layout/header';
import ContentView from './layout/content';
import SidebarView from './layout/sidebar';
import FooterView from './layout/footer';

let AppView = Backbone.View.extend({
  className: 'app-container',
  initialize() {
    this.views = {
      header: new HeaderView(),
      sidebar: new SidebarView(),
      content: new ContentView()

      // footer: new FooterView()

    };
  },

  setContent(html) {
    this.views.content.$el.html(html);
  },

  setSidebar(html) {
    this.views.sidebar.$el.html(html);
  },

  render() {
    _.each(this.views, function(view, name) {
      this.$el.append(view.render().el);
    }, this);

    return this;
  }
});

export default new AppView();
