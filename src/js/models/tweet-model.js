'use strict';

import TweetsCollection from '../collections/tweets';

var TweetsCollection = Backbone.Model.extend({
  defaults: {
    username: '',
    posted at: '',
    tweet: ''
  }
})


export default TweetsCollection;
