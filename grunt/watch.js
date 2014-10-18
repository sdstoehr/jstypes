module.exports = {
  gruntfile: {
    files: ['Gruntfile.js'],
    tasks: ['default']
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