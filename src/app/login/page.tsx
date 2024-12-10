import React from 'react'
interface User {
    id: number;
    name: string;
}

const page = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: User[] = await res.json();
  return (
    <div>
      <ul>
        {data.map((user) => (
            <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default page
 