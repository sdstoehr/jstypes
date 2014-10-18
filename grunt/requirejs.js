module.exports = {
  compile: {
    options: {
      include: "main",
      baseUrl: "target/_temp/javascript/modules",
      name: "almond",
      out: "target/_temp/main.js",
      optimize: "none",
      inlineText: true,
      findNestedDependencies: true,
      stubModules: ['text'],
      wrap: {
        startFile: 'src/main/javascript/utils/start.frag',
        endFile: 'src/main/javascript/utils/end.frag'
      },
      paths: {
        almond: '../../../../lib/almond/almond'
      }
    }
  }
};
