path = require('path')
#hljs = require('highlight.js')

module.exports = (grunt) ->
  
  grunt.initConfig

    minispade:
      options:
        renameRequire: true
        useStrict: false
        prefixToRemove: 'public/js/'
      files:
        src: ['public/js/**/*.js']
        dest: 'public/dist/app.js'

    sass:
      dist:
        options:
          trace: true
          style: 'expanded'
        files:
          'public/dist/appsass.css': 'public/sass/app.sass'

    ember_templates:
      compile:
        options:
          templateName: (sourceFile) ->
            return sourceFile.replace(/public\/handlebars\//,'')
        files:
          "public/dist/apptemplates.js": "public/handlebars/**/*.handlebars"
    
    regarde:
      js:
        files: 'public/js/**/*.js'
        tasks: ['minispade', 'showoff', 'livereload', 'regarde']
      handlebars:
        files: 'public/handlebars/**/*.handlebars'
        tasks: ['ember_templates', 'livereload', 'regarde']
      sass:
        files: 'public/sass/**/*.sass'
        tasks: ['sass', 'livereload', 'regarde']
        
    showoff:
      options:
        lang: 'javascript'
      glob_to_multiple:
        expand: true
        cwd: 'public/js'
        src: ['**/*.js']
        dest: 'public/handlebars/source'
        ext: '.handlebars'


  grunt.loadNpmTasks('grunt-contrib-livereload')
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-ember-templates')
  grunt.loadNpmTasks('grunt-regarde')
  grunt.loadNpmTasks('grunt-minispade')
  grunt.loadNpmTasks('grunt-showoff')

  grunt.registerTask( 'default', [
                      'livereload-start',
                      'showoff',
                      'ember_templates',
                      'minispade',
                      'regarde' ])
