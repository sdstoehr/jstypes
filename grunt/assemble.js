module.exports = {
    options: {
        plugins: ['assemble-contrib-permalinks', 'assemble-middleware-sitemap'],
        assets: '<%= site.assets %>',
        data: '<%= site.data %>/*.{json,yml}',
        // Metadata
        site: '<%= site %>',
        sitemap: {
            relativedest: true
        }
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