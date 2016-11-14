var fs = require('fs');
var dirPath = process.argv[2];
var filter = '.' + process.argv[3];

fs.readdir(dirPath, function(err, data) {
    if (err) {
        console.log('oops, something went wrong!');
        return
    }
    data.forEach(function(fileName){
        if (fileName.endsWith(filter)){
            console.log(fileName + '\n');
        }
    });
});