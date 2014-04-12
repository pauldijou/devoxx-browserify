module.exports = function (grunt) {
  grunt.initConfig({
    browserify: {
      app: {
        src: ['./js/app.js'],
        dest: './js/main.js'//,
        // options: {
        //   transform: ['browserify-shim', 'deamdify']
        // }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.registerTask('default', ['browserify']);

};