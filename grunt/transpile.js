module.exports = {
  main: {
    type: "amd",
    files: [
      {
        expand: true,
        cwd: 'src/main/javascript/modules/',
        src: ['**/*.js'],
        dest: 'target/_temp/javascript/modules/'
      }
    ]
  }
};