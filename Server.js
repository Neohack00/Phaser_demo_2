express = require('express');
var app = express();




app.get('/' , function(req , res){
    res.send('Hello world');
})

var server = app.listen(1337, function() {

    console.log('Server up and runing at ' + server.address().port);
})