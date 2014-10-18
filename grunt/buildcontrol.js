module.exports = {
    options: {
        dir: 'target/dist',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
    },
    github: {
        options: {
            remote: 'git@github.com:sdstoehr/jstypes.git',
            branch: 'gh-pages'
        }
    }
};