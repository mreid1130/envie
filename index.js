var fs = require('fs');

module.exports.load = function(path, options) {
  if (!path) {
    path = '.env';
  }
  var text = fs.readFileSync('./' + path, 'utf8');
  text.split('\n').forEach(function(variable) {
    if (variable.split('=').length === 0 || variable.split('=').length > 1) {
      throw new Error('Invalid environment variable declaration in file ' + path + '. Check documentation for more details.');
    } else {
      process.env[variable.split('=')[0]] = variable.split('=')[1];
    }
  });
};
