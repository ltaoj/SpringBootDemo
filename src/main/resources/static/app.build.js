({
    appDir: './src',
    baseUrl: './js',
    dir: './build',
    optimize: 'uglify',
    mainConfigFile: './src/js/requireconfig.js',
    // name: 'user'
    modules: [{
        name: 'app',
        include: ['jquery'],
        insertRequire: ['ajaxfileupload']
    },{
        name: 'user',
        exclude: ['ajaxfileupload'],
        excludeShallow: []
    }]
})