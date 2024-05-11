import { db } from "@/lib/db";

export const getUsers = async () => {
    try{
        return await db.user.findMany();
    } catch(error) {
        console.log('error in getUsers :', error?.toString());
        return null;
    }
}

export const getUserById = async (id: string) => {
    try{
        return await db.user.findFirst({ where: { id }});
    } catch(error) {
        console.log('error in getUserById :', error?.toString());
        return null;
    }
}

export const createUser = async (name: string, email: string, age: number) => {
    try {
        return await db.user.create( { data : { name, email, age, active: true }})
    } catch (error) {
        console.log('error in creatUser :', error?.toString());
        return null;
    }
}

export const deleteUserById = async (id: string) => {
    try {
        return await db.user.delete({ where : { id }})
    } catch (error) {
        console.log('error in deleteUserById :', error?.toString());
        return null;
    }
}