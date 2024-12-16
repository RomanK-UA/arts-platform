import React from 'react'

const Main = () => {
  return (
    <main className="col-span-full sm:col-start-2 sm:col-end-3 border-2 border-blue-400 p-4 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
<div className="relative h-fit border-2 border-gray-500 group">
  <img src="/avatar.jpg" alt="image" className="w-full h-full object-cover" />

  <div className="absolute bottom-0 z-50 w-full h-0 bg-amber-400 text-white flex items-center justify-center transition-all duration-300 overflow-hidden group-hover:h-1/3 opacity-70">
    <div className="p-4">Description</div>
  </div>
</div>


  </main>
  )
}
export default Main
