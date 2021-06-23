const express = require('express');
const compression = require('compression');
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
var bodyParser = require('body-parser');

const home = require('./routes/home');
const goals = require('./routes/goals');
const { response } = require('express');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://npeeters:test123@logboek.tv8ou.mongodb.net/logboek-activiteiten?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
    try {
      await client.connect({useUnifiedTopology: true});
      const database = client.db('logboek-activiteiten');
      const movies = database.collection('datums');
      // Query for a movie that has the title 'Back to the Future'
      const movie = await movies.find();
      console.log(movie);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

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