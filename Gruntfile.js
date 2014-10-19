module.exports = function(grunt) {

  require('load-grunt-config')(grunt, {
      data: {
        pkg: grunt.file.readJSON('package.json'),
        site: grunt.file.readYAML('_config.yml')
      }
  });

  grunt.loadNpmTasks('assemble' );

  // Default task(s).
  grunt.registerTask('javascriptquick', ['transpile', 'requirejs', 'uglify'])
  grunt.registerTask('javascript', [ 'jshint', 'javascriptquick']);
  grunt.registerTask('css', ['sass', 'autoprefixer', 'cssmin']);

  grunt.registerTask('build', ['clean', 'bower', 'copy', 'css', 'javascript', 'assemble']);

  grunt.registerTask('deploy', ['build', 'buildcontrol:github']);

  grunt.registerTask('default', ['build']);

};