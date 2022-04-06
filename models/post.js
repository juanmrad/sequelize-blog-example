'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.user = post.belongsTo(models.user, {
        foreignKey: 'user_id'
      });
    }
  }
  post.init({
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    categories: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};