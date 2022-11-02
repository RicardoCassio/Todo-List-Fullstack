const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init (sequelize){
        super.init({
            nome: DataTypes.STRING,
            sobrenome: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            status: DataTypes.INTEGER,
        }, {
            sequelize
        });
    };
};

module.exports = User;