module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("user", {
      rut: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };