require('dotenv').config();
module.exports = {
  "development": {
    "username": "root",
    "password": "root",
    "database": "boardApp_development",
    "host": "localhost",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "boardApp_test",
    "host": "localhost",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": "root",
    "database": "boardApp_production",
    "host": "localhost",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "operatorsAliases": "0"
  }
}
