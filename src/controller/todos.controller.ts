import { RequestHandler } from "express";

import { Todos } from "../models/todos.models.js";

export const createToDo: RequestHandler = async (req, res, next) => {
	var todos = await Todos.create({ ...req.body });
	return res
		.status(200)
		.json({ message: "Todo created successfully", data: todos });
};

export const deleteToDo: RequestHandler = async (req, res, next) => {
	const { id } = req.params;
	const deleteToDo: Todos | null = await Todos.findByPk(id);

	await Todos.destroy({ where: { id } });

	return res
		.status(200)
		.json({ message: "Todo deleted successfully", data: deleteToDo });
};

export const getAllToDo: RequestHandler = async (req, res, next) => {
	const allTodos: Todos[] = await Todos.findAll();

	return res
		.status(200)
		.json({ message: "Todo fetched successfully", data: allTodos });
};

export const getTodoById: RequestHandler = async (req, res, next) => {
	const { id } = req.params;

	const todos: Todos | null = await Todos.findByPk(id);
	return res
		.status(200)
		.json({ message: "Todo fetched succesfully", data: todos });
};

export const updateToDo: RequestHandler = async (req, res, next) => {
	const { id } = req.params;
	await Todos.update({ ...req.body }, { where: { id } });
	const updatedTodos: Todos | null = await Todos.findByPk(id);
	return res
		.status(200)
		.json({ message: "Todo updated successfully", data: updatedTodos });
};
