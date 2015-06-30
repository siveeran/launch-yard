module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      dist: {
        files: {
          'controllers.js': [
            'scripts/controllers/home.js',
            'scripts/controllers/brainstorm.js',
            'scripts/controllers/platform.js',
            'scripts/controllers/landing.js',
            'scripts/controllers/statistics.js'
          ]
        }
      }
    },
    cssmin: {
      dist: {
        files: {
          'styles.css': [
            'launchyard_files/style.css',
            'launchyard_files/flexslider.css'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('build', ['uglify', 'cssmin']);
};