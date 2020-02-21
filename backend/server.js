const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
const userRouter = require('./route/user');
const exerciseRouter = require('./route/exercise');

//const uri = process.env.ATLAS_URI;

const uri = 'mongodb+srv://nttrongtan1605:trtan!605@cluster0-ys62u.gcp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB connected'));

/*const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("DB connected!")
})*/



require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('helloooo!');
})

app.use('/exercise', exerciseRouter);
app.use('/user', userRouter);

app.listen(port, () => {
    console.log('Server running on port: ' + port);
})