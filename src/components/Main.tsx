import React from 'react'

const Main = () => {
  return (
    <main className="row-start-2 row-end-3 col-start-1 col-span-full md:col-start-2 md:col-span-2 border-2 border-blue-400 p-4 h-[calc(100vh-9rem)] overflow-y-auto">
      <h1 className="text-2xl font-bold">Main Content</h1>
      <p>This is the main content area, and it spans the remaining space.</p> 
    </main>
  )
}

export default Main
