import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";
import { deleteUserById, getUserById } from "@/data/user";


const GET = async (request: NextApiRequest, { params }: { params: { id: string } }) => {

    const id = params?.id;
    // const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const response = await getUserById(`${id}`);
    return Response.json(response)
}

const PUT = () => {
    return Response.json({'message': 'Put data'})
}

const PATCH = () => {
    return Response.json({'message': 'Patch data'})
}

const DELETE = async (request: NextApiRequest, { params }: { params: { id: string } }) => {
    const id = params?.id;
    const response = await deleteUserById(`${id}`)
    return Response.json(response)
}

export { GET, PUT, PATCH, DELETE };