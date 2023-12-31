module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        preco: {
            type: DataTypes.DECIMAL(18, 2),
            allowNull: false
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });

    return Produto;
};
