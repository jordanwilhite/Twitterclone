import AppView from './views/app';
import Router from './routers/router';

$('.app').html(AppView.render().el);
Backbone.history.start();
