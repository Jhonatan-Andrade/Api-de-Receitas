const express = require('express');

const router = express.Router();
const data =[
    {
      "ingredients": [
        {
          "key": "1",
          "text": "1 pitada de sal"
        },
        {
          "key": "2",
          "text": "3 unidades de cenoura médias e cruas"
        },
        {
          "key": "3",
          "text": "1 xícara (chá) de óleo de soja"
        },
        {
          "key": "4",
          "text": "1 colher (sopa) de fermento químico em pó"
        },
        {
          "key": "5",
          "text": "2 xícaras (chá) de farinha de trigo"
        },
        {
          "key": "6",
          "text": "3 unidades de ovo"
        },
        {
          "key": "7",
          "text": "2 xícaras (chá) de açúcar"
        },
      ],
      "_id": "5f0e634330c8e70017c25c12",
      "name": "bolo de cenoura",
      "preparation":[
        {      
          "key": "1",
          "text": "Bata no liquidificador os ovos, as cenouras (em pedaços), o óleo e o sal."
        },
        {      
          "key": "2",
          "text": "Numa tigela, misture o açúcar, o fermento e a farinha."
        },
        {      
          "key": "3",
          "text": "Despeje a mistura do liquidificador para a tigela e misture bem."
        },
        {      
          "key": "4",
          "text": "Leve para assar em forma untada e polvilhada com farinha."
        },
      ],
      "__v": 1
    }
  ]
//(buscar admin)-------------------------------------------------------
const searchAdmin = require('./controllers/searchAdmin');
router.get('/api/admin',searchAdmin);

//(buscar)-------------------------------------------------------
const search = require('./controllers/search');
router.get('/api',search);
router.get('/api/dev',(req,res)=>{
    return res.json(data)
});
//(criar)--------------------------------------------------------
const create = require('./controllers/create')
router.post('/api',create);

module.exports= router;