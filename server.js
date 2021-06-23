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

app.use(express.static(path.resolve("public")))
.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
.use(compression());

app.set('views', './views');
app.set('view engine', 'ejs');

app.get("/", home)
.get("/activiteiten")
.get("/doelen", goals)
.get("/planactiviteiten")
.get("/logboek")

.post("/logboek", add)

function add(req, res, next) {
    db.collection("datums").insertOne({
            photographer: req.body.photographer,
            location: req.body.location,
            title: req.body.titlePhoto,
            description: req.body.description,
            image: req.file ? req.file.filename : null, // zet alles na de ? uit, dan krijg je een data object. Daar kan je meer mee.
        },
        renderPage()
    );

    function renderPage(err) {
        if (err) {
            next(err);
        } else {
            res.redirect("/");
        }
    }
}

app.listen(port, () => {
    console.log(`Server is working at http://localhost:${port}`)
});