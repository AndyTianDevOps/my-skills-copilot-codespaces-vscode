// Create web server
// Create a POST route to create a new comment
// Create a GET route to get all comments
// Create a GET route to get a comment by id
// Create a PUT route to update a comment by id
// Create a DELETE route to delete a comment by id
// Create a DELETE route to delete all comments

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments');

app.use(bodyParser.json());

app.post('/comments', (req, res) => {
    const comment = comments.createComment(req.body);
    res.json(comment);
});

app.get('/comments', (req, res) => {
    const allComments = comments.getAllComments();
    res.json(allComments);
});

app.get('/comments/:id', (req, res) => {
    const comment = comments.getCommentById(req.params.id);
    res.json(comment);
});

app.put('/comments/:id', (req, res) => {
    const comment = comments.updateCommentById(req.params.id, req.body);
    res.json(comment);
});

app.delete('/comments/:id', (req, res) => {
    const comment = comments.deleteCommentById(req.params.id);
    res.json(comment);
});

app.delete('/comments', (req, res) => {
    const allComments = comments.deleteAllComments();
    res.json(allComments);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});