"use client"
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase-config";
export default function Home() {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const saveUserData = async (user) => {
   await setDoc(doc(db, "users", user.uid), {
     email: user.email,
     createdAt: new Date(),
   });
  }
  return (
   <div className="container mx-auto border-2 border-accent h-full">
     <form onSubmit={saveUserData}>
       <label htmlFor="email">Email</label>
       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
       <label htmlFor="password">Password</label>
       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
       <button type="submit">Login</button>
     </form>
   </div>
 );
}