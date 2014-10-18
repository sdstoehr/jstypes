module.exports = {
    main: {
        files: [

            // makes all src relative to cwd
            {expand: true, cwd: 'src/main/resources/', src: ['**'], dest: 'target/dist/'},

            // copy font awesome
            {expand: true, cwd: 'lib/components-font-awesome/', src: ['**'], dest: 'target/_temp/css/'},
            {expand: true, cwd: 'bower_components/components-font-awesome/fonts/', src: ['**'], dest: 'target/dist/fonts/'}

        ]
    }
};