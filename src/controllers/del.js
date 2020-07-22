
const Receita = require('../models/receitaSchema')

let del = async(req, res)=>{
    try {
        await Receita.findByIdAndRemove(req.params.id)
        return res.send()
    } catch (error) {
        return res.json({error} )
    }
}
module.exports = del