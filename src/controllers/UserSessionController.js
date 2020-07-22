const User = require ('../models/User')

module.exports = {
   async create(req,res){
        const {email} = req.body
        const {name} = req.body
        const {password} = req.body
        const {permission} = req.body

        let user = await User.findOne({email})
        if (!user)
        { 
           user =  await User.create({email, name, password,permission})   
        } else
        {
            res.json({Messagem: 'Email Já Existe'})
        }

        return res.json(user)
    }
};