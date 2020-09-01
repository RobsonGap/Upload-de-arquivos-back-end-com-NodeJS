const express = require('express');
const morgan = require("morgan");
const mongoose = require('mongoose');

const app = express();

/**
 * Database setup
 */
mongoose.connect('mongodb://localhost/noderest', {useCreateIndex: true, useUnifiedTopology: true,useNewUrlParser: true,useFindAndModify:false});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(require("./routes"));

app.listen(3000);