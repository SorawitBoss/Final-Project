module.exports = (sequelize, DataTypes) => {
    const Oven = sequelize.define('Oven', {
        product: DataTypes.STRING,
        brand: DataTypes.STRING,
        price: DataTypes.INTEGER,
        width: DataTypes.INTEGER,
        height: DataTypes.INTEGER,
        depth: DataTypes.INTEGER,
        weight: DataTypes.INTEGER,
        temperature: DataTypes.STRING,
        capacity: DataTypes.INTEGER,
        fire_power: DataTypes.INTEGER,
        color: DataTypes.STRING,
        material: DataTypes.STRING,
        warranty: DataTypes.INTEGER
    })

    return Oven
}