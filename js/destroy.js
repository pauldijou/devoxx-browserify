console.warn('THE WORLD IS GONNA END IN...');

var decompte = function (current) {
  if (!current) {
    console.warn('KABOUUUUUUUUM');
  } else {
    console.warn(current + '...');
    setTimeout(function () {
      decompte(current-1);
    }, 700);
  }
};

decompte(3);
