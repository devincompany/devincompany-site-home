var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var sass = require('metalsmith-sass');
var metadata = require('./metadata.json');

Metalsmith(__dirname)
    .source('source')
    .destination('output')
    .metadata(metadata)
    .use(markdown())
    .use(layouts({
        engine: 'handlebars',
        directory: 'templates'
    }))
    .use(sass({
        outputStyle: "expanded",
        outputDir: function(originalPath) {
            return originalPath.replace("scss", "styles");
        }
    }))
    .build(function(err) {
        if (err) throw err;
    });
