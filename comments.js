// Create web server
// http://localhost:8080/comments
// http://localhost:8080/comments/1

var express = require('express');
var app = express();

var comments = [
    {name: 'A', comment: 'This is comment 1'},
    {name: 'B', comment: 'This is comment 2'},
    {name: 'C', comment: 'This is comment 3'}
];

app.get('/comments', function(req, res) {
    res.json(comments);
});

app.get('/comments/:id', function(req, res) {
    if (comments[req.params.id]) {
        res.json(comments[req.params.id]);
    } else {
        res.json({error: 'Comment does not exist'});
    }
});

app.listen(8080);
console.log('Server is running on port 8080');