import { NextApiRequest, NextApiResponse } from "next";
import { createUser, getUsers } from "@/data/user";

const GET = async () => {
    const response = await getUsers();
    return Response.json(response)
}

const POST = async (request: NextApiRequest) => {
    
    // To access searchParams
    // let query = request.nextUrl.searchParams;
    // console.log('query :', query.get("brand"))

    let payload = await request.json();
    const { name, email, age } = payload;
    const response = await createUser(name, email, age);
    return Response.json(response)
}


export { GET, POST };