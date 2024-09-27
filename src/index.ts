import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string, email: string) {
    try {
        const newUser = await prisma.user.create({
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

    } catch (error) {
        console.error("Error inserting user:", error);

    }
}

insertUser('tanmay', 'dasdsa43$#*BD', 'tanmay', 'kumar', 'tkmm@example.com');

async function createTodo(userId: number, title: string, description: string) {
    try {
        const response = await prisma.todo.create({
            data: {
                userId,
                title,
                description
            }
        })

        console.log("todo created: ", response);
        return response;
        
    } catch (error) {
        console.log("error", error);
        
    }
}

createTodo(1, "go to gym", "go to gym and do 10 pushups");

async function getTodosAndUserDetails(userId: number, ) {
    const todos = await prisma.todo.findMany({
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
}

getTodosAndUserDetails(1);
