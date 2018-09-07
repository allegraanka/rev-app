const userData = require('../data/user-data.json');

module.exports.usersGetAll = function(req, res) {
  console.log('GET user data');
  res
    .status(200)
    .json(userData);
};

module.exports.usersGetOne = function(req, res) {
  var userId = req.params.hotelId;
  var resourceId = userData.resource.rid;
  console.log('GET resource ID', resourceId);
  res
    .status(200)
    .json(userData.resource.rid);
};

module.exports.usersAddOne = function(req, res) {
  console.log('POST new user');
  console.log(req.body);
  res
    .status(200)
    .json(req.body);
};
