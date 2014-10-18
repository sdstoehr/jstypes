module.exports = {
  gruntfile: {
    files: ['Gruntfile.js'],
    tasks: ['default']
  },
  bower: {
      files: ['bower.json'],
      tasks: ['bower']
  },
  javascript: {
    files: ['src/main/javascript/**/*.js'],
    tasks: ['javascriptquick']
  },
  css: {
    files: 'src/main/css/**/*.scss',
    tasks: ['css']
  },
  resources: {
    files: 'src/main/resources/**/*',
    tasks: ['copy']
  }
};