
const Reserv  = require('../models/Reserv')

module.exports = {
    async create(req,res) {
          const   { user_id }   = req.headers;
          const   { spot_id }   = req.params;
          const   {date }       = req.body;  

          const reserv = await Reserv.create({
              user:user_id,
              spot: spot_id,
              date,
          })


          await reserv.populate('spot').populate('user').execPopulate();
          return res.json(reserv)
    }
}