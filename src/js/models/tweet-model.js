import BaseModel from './base-model';

let TweetModel = BaseModel.extend({
  url: 'https://twitterfeeder.herokuapp.com/messages',
  defaults: {
    createdAt: () => new Date(),
    postedAt: '',
    body: ''
  },

  parse(response) {
    if (response.data) {
      return {
        user: response.data.attributes.user_id,
        body: response.data.attributes.body,
        id: response.id
      }
    }

    return {
      body: response.attributes.body,
      user: response.attributes.user_id
    }
  },

  sync(method, model, options) {
    if (model && (method == 'create' || method == 'update')) {
      options.attrs = {
        tweet: model.toJSON()
      };
    }

    Backbone.sync.call(this, method, model, options);
  }
});

export default TweetModel;
