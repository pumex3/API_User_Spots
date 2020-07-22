const { create, listIndexes } = require("../models/User");
const Spot = require ('../models/Spot');
const User = require("../models/User");

module.exports = {


    async list(req, res){
        const {team} = req.query;
        
        const spots = await Spot.find({team: team})
        
        return res.json(spots)
    },


    async create(req,res){
      const {filename} = req.file;
      const {image,title,team} = req.body;
      const {user_id} = req.headers;

      const user = await User.findById(user_id)

      if (!user) {
          return res.status(400).json({error: 'Usuário Não Existe'})
      }

      const spot = await Spot.create({
          user: user_id,
          image: filename,
          team: team.split(',').map(team => team.trim()),
          title,
      })

     return res.json(spot)
    }
}