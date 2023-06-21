const connection = require('../database/connection');
const Sequelize = require('sequelize');
const Category = require('../categories/Category');

const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Article.belongsTo(Category);
Category.hasMany(Article);


module.exports = Category;