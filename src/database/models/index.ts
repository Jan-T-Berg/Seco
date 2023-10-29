'use strict';
/**
 * Die Datenbank wird mit Sequelize erstellt und mit Daten befüllt.
 * npx sequelize-cli db:create
 * npx sequelize-cli db:migrate
 * npx sequelize-cli db:seed:all
 *
 * @fileoverview This file is used to import all the models in the models folder
 * @namespace models
 * @author Jan Berg
 * @version 1.0.0
 * @global
 */
import mysql2 from 'mysql2';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require('@/database/config/config.json')[env];
const { DataTypes } = require('sequelize');
const db: any = {};

let sequelize: any | null;

sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  dialectModule: mysql2,
  logging: false,
});

let modelPath = path.join(process.cwd(), 'src', 'database', 'models');

fs.readdirSync(modelPath).forEach((file: any) => {
  if (file.indexOf('.') !== 0 && file.slice(-3) === '.js') {
    let myfile = null;

    if (file.endsWith('.js')) {
      myfile = file.substr(0, file.length - 3);
    }

    if (myfile && myfile != 'index') {
      const model = require('./' + myfile)(sequelize, DataTypes);
      db[model.name] = model;
    }
  }
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
