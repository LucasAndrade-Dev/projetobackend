require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors()); 
app.use(express.json());
app.use((req, res, next) => {
 res.setHeader("Access-Control-Allow-Origin", "*");
 res.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, PATCH, DELETE');
 res.header(
 "Access-Control-Allow-Headers",
 "Origin, X-Requested-With, Content-Type, Accept" ); next();
});
app.use(express.json());
const PORT = process.env.PORT || 3000;
const routes = require('./routes/routes');
app.use('/api', routes);
app.listen(PORT, () => {
 console.log(`Server Started at ${PORT}`)
})
// Obtendo os parametros passados pela linha de comando
const mongoURL = process.env.MONGO_URL;
mongoose.connect(mongoURL);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', (error) => {
 console.log(error)
})
db.once('connected', () => {
 console.log('Database Connected');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});




