import React from 'react'

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = () => {
  return (
    <aside className={`
      hidden sm:block col-start-1 col-end-2
      transition-transform duration-300
      md:translate-x-0
      z-40
      p-4
    `}>
      <div className='flex flex-col gap-4 sticky top-[100px] border-2 border-green-400 w-full'>
        <h1 className='text-2xl font-bold'>Categories</h1>
        <div className='flex flex-col gap-2'>
          <h2 className='text-lg font-bold'>Art</h2>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
