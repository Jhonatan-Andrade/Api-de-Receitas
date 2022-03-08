const express = require('express');

const router = express.Router();

//(buscar)-------------------------------------------------------
const search = require('./controllers/search');
router.get('/api',search);
//(criar)--------------------------------------------------------
const create = require('./controllers/create')
router.post('/api',create);

//(detetar)--------------------------------------------------------
const del = require('./controllers/del')
router.post('/api',del);
module.exports= router;
