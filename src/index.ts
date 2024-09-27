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
