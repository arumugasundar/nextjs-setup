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
