## Application Setup

1. To setup next.js app - ```npx create-next-app@latest```
2. Navigate to ```root``` directory
3. To run the project - ```npm run dev```

## Database Setup
1. To install prisma - ```npm i -D prisma```
2. To install prisma client - ```npm i @prisma/client```
3. To initiate prisma - ```npx prisma init```
4. In the ```.env``` file, set the ```DATABASE_URL``` to ```mongodb+srv://m001-student:aZI0HSTsFfFN78sd@sandbox.qfehb.mongodb.net/angelhack?retryWrites=true&w=majority```
5. In ```prisma -> schema.prisma``` file, change the datasource db provider as ```mongodb```
6. In ```prisma -> schema.prisma``` file, create a users collection with below code
```bash
model User {
  id            String    @id @default(auto()) @map("_id") @db.ObjectId
  name          String?
  email         String?   @unique
  is_active     Boolean
}
```
7. To push the changes to db - ```npx prisma db push```
8. To generate prisma client - ```npx prisma generate```
9. Create ```lib``` folder in root directory.
10. Create ```db.ts``` file inside ```lib``` folder and paste the below code
```bash
import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== 'production') globalThis.prisma = db;
```
11. Add ```NODE_ENV="test"``` in .env file

## Querying with DB
1. Create ```data``` folder in root directory
2. Create a ```user.ts``` file inside ```data``` folder and paste the below code
```bash
import { db } from "@/lib/db";

export const getUsers = async () => {
    try{
        const user = await db.user.findMany();
        return user;
    } catch {
        return null;
    }
}
```
3. In ```app/page.tsx``` file, call the ```getUsers()``` & console the response in terminal (since it is a ssr approach, response will not be visible in broswer console)
```bash
import { getUsers } from "@/data/user";
export default async function Home() {

  const users = await getUsers();
  console.log('users :', users);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hell World
    </main>
  );
}
```

## REST API Setup
1. Create an ```api``` folder inside ```app``` directory
2. Create an ```users``` folder inside ```api``` directory
3. Create a ```route.ts``` file inside ```users``` directory and paste the below code
```bash
import { getUsers } from "@/data/user";

const GET = async () => {
    const response = await getUsers();
    return Response.json(response)
}

export { GET };
```

## Shadcn/ui Setup

## Validation Setup

---
1. To install zod - ```npm install zod```
2. Create ```schemas``` folder in root directory
3. Create a ```index.ts``` file inside ```schemas``` folder and paste the below code
```bash
import * as z from "zod";

export const UserSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    })
})
```




<!-- ## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->
