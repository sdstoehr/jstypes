module.exports = {
    main: {
        files: [

            // makes all src relative to cwd
            {expand: true, cwd: 'src/main/resources/', src: ['**'], dest: 'target/dist/'},

        ]
    }
};