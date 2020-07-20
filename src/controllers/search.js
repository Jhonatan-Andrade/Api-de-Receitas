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
//ingredients---------------------------------------------------------------------
            let ingredients = dbfind[i].ingredients.split('.').splice(1)
            let ingredientsArray=[]
            for (let j = 0; j < ingredients.length; j++) {
                ingredientsArray.push( {
                    key:j+1,
                    text:ingredients[j]
                })
                
            }
//preparation----------------------------------------------------------------------

            let preparation = dbfind[i].preparation.split('.').splice(1)

            let preparationArray=[]
            for (let j = 0; j < preparation.length; j++) {
                preparationArray.push( {
                    key:j+1,
                    text:preparation[j]
                })
                
            }
//--------------------------------------------------------------------------------
            array.push({
                _id,
                name,
                ingredients:ingredientsArray,
                preparation:preparationArray})
        }
        console.log(array);

        return res.json(array)
    } catch (error) {
        return res.json({error} )
    }
   
}
module.exports = search
