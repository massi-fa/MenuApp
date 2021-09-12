const express = require('express');
const app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

const PORT = 3001
app.listen(PORT, function() {
  console.log(`listening on ${PORT}`)
})


const MongoClient = require('mongodb').MongoClient;
const { ObjectId } = require('mongodb');
const connectionString = 'mongodb+srv://admin:trutru00@cluster0.f5h3m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
MongoClient.connect(connectionString, {
  useUnifiedTopology: true
  }, (err, client) => {
  if (err) return console.error(err)
  console.log('Connected to Database');
  const db = client.db('Menu-App');
  const products = db.collection('products');
  const cart = db.collection('cart');

  app.post("/add", (req, res) => {
    console.log('Adding new Product')
    console.log(req.body.name)
    console.log(req.body.price)
    console.log(req.body.weight)
    //inserisce l'elemento del form all'interno del database
    products.insertOne(req.body)
      .then(result => {
        console.log(result)
      })
      .catch(error => console.error(error))
  });

  //invia i dati a react
  app.post('/', (req, res) => {
    db.collection('products').find().toArray()
      .then(results => {
        console.log('result')
        res.send(results)
        //res.send(results);  
        //console.log(results)
      })
      .catch(error => console.error(error))
    // ...
  })
  app.post('/Product', (req, res) => {
    const id = req.body.id;
    db.collection('products').find({_id: ObjectId(`${id}`)}).toArray()
      .then(result => { 
        res.send(result[0]);
        console.log(result[0])
      })
      .catch(error => console.error(error))
  })
})