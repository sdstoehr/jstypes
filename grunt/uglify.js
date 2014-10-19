module.exports = {
  options: {
    banner: '/*! <%= package.name %> - v<%= package.version %> - ' +
      '(c) <%= package.author.name %>, <%= grunt.template.today("yyyy") %>*/\n'
  },
  navigation: {
    files: {
      'target/dist/assets/scripts/main.min.js': ['target/_temp/main.js']
    }
  }
};