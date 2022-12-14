"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_controller_js_1 = require("../controller/todos.controller.js");
const router = (0, express_1.Router)();
router.post("/", todos_controller_js_1.createToDo);
router.get("/", todos_controller_js_1.getAllToDo);
router.get("/:id", todos_controller_js_1.getTodoById);
router.put("/:id", todos_controller_js_1.updateToDo);
router.delete("/:id", todos_controller_js_1.deleteToDo);
exports.default = router;
