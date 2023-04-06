// Routing
import express from 'express'
import path from 'path';
// import cors from 'cors';
const __dirname = path.resolve();
const app = express()
const port = process.env.PORT || '3010'
app.use(express.json());
// app.use(cors());
// const Farmers = require('./config');

// import Farmers from '../config';

app.use(express.static(__dirname + "/public"))

app.listen(port, ()=>{
    console.log(__dirname + "/public");
    console.log(`Server listening at http://localhost:${port}`);
})

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,"/view/farmerSignup.html"))
})