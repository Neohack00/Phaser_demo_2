express = require('express');
var app = express();

app.use(express.static('Public'));
app.use(express.static('Public/assets'))

app.get('/' , function(req , res){
    res.sendfile('/Public/index.html');
})
app.get('/part1.html', function(req , res){
    res.sendfile(__dirname + '/Public/part1.html')
})

var server = app.listen(1337, function() {

    console.log('Server up and runing at ' + server.address().port);
})