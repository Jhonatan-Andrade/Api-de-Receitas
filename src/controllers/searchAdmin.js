const Receita = require('../models/receitaSchema')



let search = async(req, res)=>{
    try {
        let dbfind = await Receita.find()


        const array = []
        for (let i = 0; i < dbfind.length; i++) {
//_id-----------------------------------------------------------------------------
            let _id = dbfind[i]._id
//name----------------------------------------------------------------------------
            let name = dbfind[i].name
//--------------------------------------------------------------------------------
            array.push({
                _id,
                name,
            })
        }

        return res.json(array)
    } 
    catch (error) {
        return res.json({error} )
    }
   
}
module.exports = search
