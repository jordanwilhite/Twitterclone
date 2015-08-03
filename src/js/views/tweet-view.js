'use strict'

import Router from '../routers/router.js'
import Usermodel from '../models/user-model'

var TweetsView = Backbone.View.entend({
  template = _.template(['#twitterfeed'].html()),

});
