const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Executor = sequelize.define('executor', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
})

const Role = sequelize.define('role', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    weight: {type: DataTypes.REAL},
})

const ExecutorRole = sequelize.define('executor_role', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    qualification: {type: DataTypes.REAL},
    execution: {type: DataTypes.REAL},
})
//--------------------------------
const Gps = sequelize.define('gps', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    time: {type: DataTypes.REAL},
    long: {type: DataTypes.STRING},
    lat: {type: DataTypes.STRING},
    color: {type: DataTypes.STRING},
})
//--------------------------------

Executor.belongsToMany(Role, {through: ExecutorRole })
Role.belongsToMany(Executor, {through: ExecutorRole })

module.exports = {
    ExecutorRole,
    Executor,
    Role,
    Gps
}