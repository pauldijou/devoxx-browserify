var logger = function () {
  console.log.apply(console, arguments);
};

var isString = function (input) {
  return typeof input === 'string';
};

var color = function (name) {
  logger[name] = function (input) {
    if (isString(input)) {
      console.log('%c' + input, 'color:' + name);
    } else {
      console.log(input);
    }
  };
};

var colors = ['red', 'blue', 'green', 'orange', 'purple'];

colors.forEach(color);

module.exports = logger;
