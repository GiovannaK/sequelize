const {Op} = require('sequelize');
const User = require('../models/User');

module.exports = {
  async show(req, res){
    const users = await User.findAll({
      atributes: ['name', 'email'],
      where: {
        email: {
          [Op.iLike]: '%@gmail.com'
        },
      },
      include: [
        {association: 'addresses', where: { street: 'uma rua qualquer' } },
        {association: 'techs',
          required: false,
          where: {
            name: {
              [Op.iLike]: 'React%'
            }
          }
        },
      ]
    })

    return res.json(users);
  }
}