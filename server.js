const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routesUrls = require('./routes/routes')
const cors = require('cors')
dotenv.config();

app.use(express.json());
app.use(cors);
app.use('/app', routesUrls);
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("database connected"));

app.listen(4000, ()=> console.log("server is up and running"));

