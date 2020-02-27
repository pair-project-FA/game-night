const express = require('express');
const app = express();
const port = 3000;



app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {    
    res.render('login-page')
});

app.get('/home', (req, res) => {
    res.render('home')
});

app.get('/profile', (req, res) => {
    res.render('profile')
});

app.get('/events', (req, res) => {
    res.render('events')
});

app.get('/add', (req, res) => {
    res.render('event-create')
});


app.listen(port, () => console.log(`listening to port : ${port}`))