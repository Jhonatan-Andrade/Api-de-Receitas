const Receita = require('../models/receitaSchema')
let create = async(req, res)=>{
    try {
        let receita = await Receita.create({
            name:req.body.name,
            ingredients:req.body.ingredients,
            preparation:req.body.preparation
        })
        return res.json(receita) ;
    } catch (error) {
        console.log(error);
        return res.json({error}) 
    }

}
module.exports = create