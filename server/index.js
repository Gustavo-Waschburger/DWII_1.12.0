
const msg = require('./outmsg.js');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.get('/',(req,res)=>{
    res.json(msg)
})

app.listen(8181, ()=>{
    console.log('servidor rodando');
});