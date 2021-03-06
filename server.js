const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//iniciando o DB
mongoose.connect(
    'mongodb+srv://emanoeledev:0301200210a@cluster0-7vegy.mongodb.net/test?retryWrites=true', 
    {useNewUrlParser: true}
);
requireDir('./src/models/');


// rotas
app.use('/api', require('./src/routes'));

app.listen(process.env.PORT || 3000);