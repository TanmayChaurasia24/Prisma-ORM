"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(username, password, firstName, lastName, email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newUser = yield prisma.user.create({
                data: {
                    username,
                    password,
                    firstName,
                    lastName,
                    email
                }
            });
            console.log("User inserted successfully:", newUser);
            return newUser;
        }
        catch (error) {
            console.error("Error inserting user:", error);
        }
    });
}
// insertUser('tanmay', 'dasdsa43$#*BD', 'tanmay', 'kumar', 'tkmm@example.com');
function createTodo(userId, title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield prisma.todo.create({
                data: {
                    userId,
                    title,
                    description
                }
            });
            console.log("todo created: ", response);
            return response;
        }
        catch (error) {
            console.log("error", error);
        }
    });
}
createTodo(1, "go to gym", "go to gym and do 10 pushups");
function getTodosAndUserDetails(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const todos = yield prisma.todo.findMany({
            where: {
                userId: userId,
            },
            select: {
                user: true,
                title: true,
                description: true
            }
        });
        console.log(todos);
    });
}
getTodosAndUserDetails(1);
