const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

//port connection
app.listen( port , () =>{ 
    console.log(`Server is running on port ${port}`);
});

//routes
app.get("/", (req, res) => res.send("Hello World!"));

const exerciseRouter = require('./routes/exercise');
const userRouter = require('./routes/users');

app.use("/exercises",exerciseRouter);
app.use('/users',userRouter);

//Mongodb connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);






