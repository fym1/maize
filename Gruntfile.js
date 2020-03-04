/* global module: true */
module.exports = function (grunt) {
    grunt.initConfig({
        htmlmin: {
            options: {
              collapseWhitespace: true,
              preserveLineBreaks: false
            },
            files: {
              expand: true,
              src: ['./tmp/_book/*.html'],
              dest: 'dist/'
            }
          },
        cssmin: {
            'dist/gitbook/gitbook-plugin-highlight/website.css': './tmp/_book/gitbook/gitbook-plugin-highlight/website.css',
            'dist/gitbook/gitbook-plugin-search/search.css': './tmp/_book/gitbook/gitbook-plugin-search/search.css',
            'dist/gitbook/gitbook-plugin-fontsettings/website.css': './tmp/_book/gitbook/gitbook-plugin-fontsettings/website.css',
            'dist/gitbook/style.css':'./tmp/_book/gitbook/style.css'
        },
        uglify: {
            release:{
                files: {
                    'dist/gitbook/gitbook.js':'./tmp/_book/gitbook/gitbook.js',
                    'dist/gitbook/theme.js':'./tmp/_book/gitbook/theme.js',
                    'dist/gitbook/gitbook-plugin-lunr/search-lunr.js': './tmp/_book/gitbook/gitbook-plugin-lunr/search-lunr.js',
                    'dist/gitbook/gitbook-plugin-search/search-engine.js': './tmp/_book/gitbook/gitbook-plugin-search/search-engine.js',
                    'dist/gitbook/gitbook-plugin-search/search.js': './tmp/_book/gitbook/gitbook-plugin-search/search.js',
                    'dist/gitbook/gitbook-plugin-sharing/buttons.js': './tmp/_book/gitbook/gitbook-plugin-sharing/buttons.js',

                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['htmlmin', 'cssmin', 'uglify']);
};