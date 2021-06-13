const express = require('express');
const compression = require('compression');
const path = require("path");
const app = express();
const port = process.env.PORT || 5000


const home = require('./routes/home');
const goals = require('./routes/goals');
const { response } = require('express');

app.use(express.static(path.resolve("public")))
.use(compression());

app.set('views', './views');
app.set('view engine', 'ejs');

app.get("/", home, (req, res) => {
    res.render('profiel.ejs');
});

app.get('/activiteiten', (req, res) => {
    res.render('activiteiten.ejs');
});

app.get('/doelen', goals, (req, res) => {
    res.render('doelen.ejs');
});

app.get('/logboek', (req, res) => {
    res.render('logboek.ejs');
});

app.listen(port, () => {
    console.log(`Server is working at http://localhost:${port}`)
});