module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                },
                files: {
                    'dist/styles/style.css': 'src/styles/style.less'
                }
            }
        },
        uglify: {
            options: {
            },
            my_target: {
                files: {
                    'dist/scripts/script.min.js': 'src/scripts/main.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['less', 'uglify']);
};
