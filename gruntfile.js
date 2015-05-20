"use strict";
module.exports = function (grunt) {

  grunt.initConfig({

    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        src: 'dist/js/main.js',
        dest: 'dist/js/main.js'
      }
    },

    sass: {
      dev: {
        options: {
          sourceMap: true
        },
        src: 'app/scss/main.scss',
        dest: 'dist/css/main.css'
      },
      dist: {
        options: {
          outputStyle: 'compressed',
          sourceMap: true
        },
        src: 'app/scss/main.scss',
        dest: 'dist/css/main.min.css'
      }
    },

    concat: {
      dev: {
        options: {
          sourceMap: true
        },
        src: ['app/js/**/*.js'],
        dest: 'dist/js/main.js'
      }
    },

    watch: {
      scss: {
        files: 'app/scss/**/*.scss',
        tasks: ['sass:dev', 'autoprefixer:dev', 'captain_hook:dev']
      },
      js: {
        files: 'app/js/**/*.js',
        tasks: ['jshint', 'concat', 'babel', 'captain_hook:dev']
      },
      html: {
        files: 'app/**/*.html',
        tasks: ['copy:html', 'captain_hook:dev']
      },
      img: {
        files: 'app/img/**/*',
        tasks: ['copy:img']
      },
      fonts: {
        files: 'app/fonts/**/*',
        tasks: ['copy:fonts']
      }
    },

    browserSync: {
      bsFiles: {
        src: 'dist/**/*'
      },
      options: {
        server: 'dist',
        watchTask: true
      }
    },

    uglify: {
      deploy: {
        src: ['dist/js/main.js'],
        dest: 'dist/js/main.min.js'
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 3 versions', 'ie8', 'ie9']
      },
      dev: {
        src: 'dist/css/main.css',
        dest: 'dist/css/main.css'
      },
      dist: {
        src: 'dist/css/main.min.css',
        dest: 'dist/css/main.min.css'
      }
    },

    copy: {
      html: {
        cwd: 'app/',
        src: '**/*.html',
        dest: 'dist/',
        expand: true
      },
      modernizr: {
        cwd: 'app/',
        src: 'js/modernizr.js',
        dest: 'dist/',
        expand: true
      },
      fonts: {
        cwd: 'app/',
        src: 'fonts/**/*',
        dest: 'dist/',
        expand: true
      },
      img: {
        cwd: 'app/',
        src: 'img/**/*',
        dest: 'dist/',
        expand: true
      }
    },

    captain_hook: {
      dev: {
        options: {
          cwd: "dist"
        },
        jsFiles: ['js/**/*.js', '!js/**/*.min.js'],
        cssFiles: ['css/**/*.css', '!css/**/*.min.css'],
        targetHtml: ['index.html']
      },
      dist: {
        options: {
          cwd: "dist"
        },
        jsFiles: ['js/**/*.min.js'],
        cssFiles: ['css/**/*.min.css'],
        targetHtml: ['index.html']
      }
    },

    jshint: {
      options: {
        jshintrc: true
      },
      all: ['Gruntfile.js', 'app/js/**/*.js']
    },

    clean: ['dist']

  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['clean', 'copy', 'sass:dev', 'concat', 'babel', 'autoprefixer:dev', 'captain_hook:dev', 'browserSync', 'watch']);
  grunt.registerTask('dist', ['clean', 'copy', 'sass:dist', 'concat', 'babel', 'autoprefixer:dist', 'uglify', 'captain_hook:dist']);

};

// TODO: Clean main.js after dist build
// TODO: Source Map for minified JavaScript file
// TODO: Deploy task to push to gh-pages branch
