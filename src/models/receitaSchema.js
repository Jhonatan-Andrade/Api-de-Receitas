const mongoose = require('mongoose')

const Receita = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    preparation:{
        type:String,
        require:true,
    },
    ingredients:{
        type:String,
        require:true,
    },
})

module.exports = mongoose.model('Receita', Receita);