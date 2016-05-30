var restful = require('node-restful');

module.exports = function(app, route) {
  var rest = restful.model(
    'customer',
    app.models.customer
  ).methods(['get', 'put', 'post', 'delete']);

  rest.register(app, route);

  return function(req, res, next){
    next();
  };
};
