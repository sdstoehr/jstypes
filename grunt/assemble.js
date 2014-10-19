module.exports = {
    options: {
        plugins: ['assemble-contrib-permalinks'],
        assets: '<%= site.assets %>',
        data: '<%= site.data %>/*.{json,yml}',
        // Metadata
        site: '<%= site %>'
    },
    project: {
        options: {
            layout: "src/main/templates/layout.hbs",
            partials: "src/main/templates/partials/**/*.hbs",
            permalinks: {
                structure: ':basename/index.html'
            }
        },
        files: [
            {expand: true, cwd: 'src/main/pages/', src: ['**/*.hbs'], dest: 'target/dist/'}
        ]
    }
};