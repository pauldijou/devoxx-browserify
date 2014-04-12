define([], function () {
  var counter = 0;

  return {
    up: function () { return ++counter; },
    down: function () { return --counter; },
    value: function () { return counter; }
  };
});
