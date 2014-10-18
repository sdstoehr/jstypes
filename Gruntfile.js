module.exports = function(grunt) {

  require('load-grunt-config')(grunt);

  // Default task(s).
  grunt.registerTask('javascriptquick', ['transpile', 'requirejs', 'uglify'])
  grunt.registerTask('javascript', [ 'jshint', 'javascriptquick']);
  grunt.registerTask('css', ['sass', 'autoprefixer', 'cssmin']);

  grunt.registerTask('build', ['clean', 'bower', 'copy', 'css', 'javascript']);

  grunt.registerTask('deploy', ['build', 'buildcontrol:github']);

  grunt.registerTask('default', ['build']);

};