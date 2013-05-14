path = require('path')
hljs = require('highlight.js')

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
        tasks: ['minispade', 'doc', 'livereload', 'regarde']
      handlebars:
        files: 'public/handlebars/**/*.handlebars'
        tasks: ['ember_templates', 'livereload', 'regarde']
      sass:
        files: 'public/sass/**/*.sass'
        tasks: ['sass', 'livereload', 'regarde']
        
    doc:
      src: [ 'public/js/controllers/YoutubeController.js',
             'public/js/views/YoutubeView.js',
             'public/js/models/YoutubeModel.js']

  grunt.loadNpmTasks('grunt-contrib-livereload')
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-ember-templates')
  grunt.loadNpmTasks('grunt-regarde')
  grunt.loadNpmTasks('grunt-minispade')


  grunt.registerMultiTask('doc', 'output source files as handlebars files', () ->
    this.files.forEach( (file)->
      src = file.src.filter( (filepath) ->
        if not grunt.file.exists filepath
          grunt.log.writeln filepath, 'doesnt exist or was not found'
          return false
        else
          grunt.log.writeln filepath, 'was found'
          return true
      ).map( ( filepath ) ->
        return createHandlebars filepath
      )
    )
  )

  createHandlebars = ( filepath ) ->
    filename = path.basename(filepath).replace('js', 'handlebars')
    content = grunt.file.read filepath
    output = "<pre><code>"+
              hljs.highlight('javascript', content).value+
              "</code></pre>"

    outputfile = "public/handlebars/source/" + filename
    grunt.log.writeln(outputfile, 'created')
    grunt.file.write(outputfile, output)

  grunt.registerTask( 'default', [
                      'livereload-start',
                      'doc',
                      'ember_templates',
                      'minispade',
                      'regarde' ])
