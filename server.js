const express = require('express')
const mongoose = require('mongoose')
const router = require('./src/router')
const cors = require('cors')

const api = express()

mongoose.connect(process.env.DB,{useNewUrlParser:true, useUnifiedTopology: true})
api.use(express.json());
api.use(cors());



//(router)------------------------------------------------------------------------------------
api.use('/',router)

const PORT = process.env.PORT || 8877;

api.listen(`${PORT}`,()=>{console.log({PORT})})