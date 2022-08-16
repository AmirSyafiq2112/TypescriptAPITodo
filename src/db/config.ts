import { Sequelize } from "sequelize-typescript";
import { Todos } from "../models/todos.models.js";

const connection = new Sequelize({
	dialect: "mysql",
	host: "localhost",
	username: "root",
	password: "",
	database: "todos",
	logging: false,
	models: [Todos],
});

export default connection;
