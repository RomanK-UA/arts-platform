interface User {
   id: number;
   name: string;
}
const page = async() => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users');
   const data: User[] = await res.json();
   
   return (
     <div className="space-y-6">
       <div className="text-center">
         <h2 className="text-3xl font-bold">Login</h2>
         <p className="text-gray-600">Welcome back!</p>
       </div>
       
       <ul>
         {data.map((user) => (
             <li key={user.id}>{user.name}</li>
         ))}
       </ul>
     </div>
   )
  }
export default page