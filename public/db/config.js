"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const todos_models_js_1 = require("../models/todos.models.js");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "todos",
    logging: false,
    models: [todos_models_js_1.Todos],
});
exports.default = connection;
