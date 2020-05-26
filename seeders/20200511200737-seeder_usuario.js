'use strict';
// const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert(
        'usuario', [{
        nome: 'Jane Doe',
        email: 'janezinha@mail.com',
        // senha: bcrypt.hashSync('123456', 10)
        senha: '1234'
      }, {
        nome: 'John Doe',
        email: 'joao@mail.com',
        // senha: bcrypt.hashSync('123456', 10)
        senha: '1234'
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {   
      return queryInterface.bulkDelete('usuario', null, {});  
  }
};
