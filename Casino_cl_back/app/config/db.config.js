module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "casa2020",
    DB: "casino_cl",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  