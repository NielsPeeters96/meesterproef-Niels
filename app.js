const express = require('express');
const compression = require('compression');
const path = require("path");
const app = express();
const PORT = process.env.PORT;

const home = require('./routes/home');
const goals = require('./routes/goals');

const mongo = require("mongodb");

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
.use(compression());

app.set('views', './views');
app.set('view engine', 'ejs');

app.get("/", home)
.get("/activiteiten", activiteiten)
.get("/doelen", goals)
.get("/planactiviteit", planactiviteiten)
.get("/logboek", logboek)

.post("/logboek", add)

function add(req, res, next) {
    const datum = getDate();
    const activiteitenobject = {wandelen: req.body.wandelen, 
        fietsen: req.body.fietsen,
        tuinieren: req.body.tuinieren,
        boodschappen: req.body.boodschappen,
        oefeningen: req.body.oefeningen,}
    let activiteitenlijst = []
    for (const [key, value] of Object.entries(activiteitenobject)) {
        if (value) {
            activiteitenlijst.push(key)
        }
      }
    db.collection("datums").insertOne({
        datum,
        activiteitenlijst, 

        },
        renderPage()
    );

    function renderPage(err) {
        if (err) {
            next(err);
        } else {
            res.redirect("/logboek");
        }
    }
}

function getDate() {
    let yourDate = new Date()
yourDate.toISOString().split('T')[0]
    const offset = yourDate.getTimezoneOffset()
yourDate = new Date(yourDate.getTime() - (offset*60*1000))
return yourDate.toISOString().split('T')[0]
}

async function logboek(req, res) {
    const datums = await db.collection("datums").find().toArray()
    const day = getDate()
    res.render("logboek.ejs", {datums, day})
}

function planactiviteiten(req, res) {
    res.render("planactiviteit.ejs")
}

function activiteiten(req, res) {
    res.render("activiteiten.ejs")
}

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));