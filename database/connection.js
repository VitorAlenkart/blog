const Sequelize = require("sequelize");

const connection = new Sequelize('blog','root','root', {
    local: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;