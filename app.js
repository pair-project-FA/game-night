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

app.get('/game', (req, res) => {
    res.render('game')
});


app.listen(port, () => console.log(`listening to port : ${port}`))