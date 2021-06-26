const express = require('express');
const compression = require('compression');
const path = require("path");
const app = express();
const PORT = process.env.PORT

const home = require('./routes/home');
const goals = require('./routes/goals');

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
            db.collection("datums").insertOne({
                wandelen: req.body.wandelen,
                fietsen: req.body.fietsen,
                tuinieren: req.body.tuinieren,
                boodschappen: req.body.boodschappen,
                oefeningen: req.body.oefeningen, // zet alles na de ? uit, dan krijg je een data object. Daar kan je meer mee.
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

        function logboek(req, res) {
            res.render("logboek.ejs")
        }
        
        function planactiviteiten(req, res) {
            res.render("planactiviteit.ejs")
        }
        
        function activiteiten(req, res) {
            res.render("activiteiten.ejs")
        }
        
        app.listen(PORT, () => {
            console.log(`Server is working at http://localhost:${PORT}`)
        });
