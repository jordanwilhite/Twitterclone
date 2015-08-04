import UserModel from '../models/user-model';
import Router from '../routers/router';
import TweetView from '../views/tweet-view';
import TweetsCollection from '../collections/tweets';

var FeedView = Backbone.View.extend({
template: _.template($('#feedview').html()),

});

export default FeedView;
