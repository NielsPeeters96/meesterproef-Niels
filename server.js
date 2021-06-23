const express = require('express');
const compression = require('compression');
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
var bodyParser = require('body-parser');

const home = require('./routes/home');
const goals = require('./routes/goals');
const { response } = require('express');

const mongo = require("mongodb");

var db = null;
var url = "mongodb+srv://" + "npeeters:test123@logboek.tv8ou.mongodb.net";

mongo.MongoClient.connect(
    url, {
        useUnifiedTopology: true,
    },
    function (err, client) {
        if (err) {
            throw err;
        }

        db = client.db('logboek-activiteiten');
        console.log("Connected correctly to MongoDB server");
    }
);


// getDataFromDatabase()
// // getOneThingFromDatabase()   
// // eerst even parameters goed zetten waarnaar je zoekt.   

// // get all data form your database  
// async function getDataFromDatabase(req, res, next) {
//     const allData = await db.collection("datums").find()
//     console.log(allData)
// }

// // Zoek naar 1 stuk data in plaats van alles.
// async function getOneThingFromDatabase(req, res, next) {
//   const user = await db.collection("datums").findOne({
//     // SEARCH PARAMETERS
//     // COMPARING THE EMAILS IN MY DATABASE TO FIND THE USER MATCHING THE LOGGED IN USER
//     // VOOR JOUW WORDT DIT EEN ANDERE PARAMETER
//     email: req.session.user.user.email
//   });
// console.log(user)
// }

app.use(express.static(path.resolve("public")))
.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
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

app.get('/planactiviteit', (req, res) => {
    res.render('planactiviteit.ejs');
});

app.get('/logboek', (req, res) => {
    res.render('logboek.ejs');
});

app.listen(port, () => {
    console.log(`Server is working at http://localhost:${port}`)
});