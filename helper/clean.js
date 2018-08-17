const rimraf = require('rimraf');

rimraf('./dist', (error) => {
    if (error) {
        console.error('Error removing the dist directory', error);
    }
    console.log('removed the dist directory..');
});
rimraf('./.cache', (error) => {
    if (error) {
        console.error('Error removing the dist directory', error);
    }
    console.log('removed the .cache directory..');
});