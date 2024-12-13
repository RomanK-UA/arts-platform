import React from 'react'

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <aside className={`
      fixed md:static
      top-16 left-0 bottom-0
      w-[300px] md:w-auto
      row-start-2 row-end-3
      p-4 
      h-[calc(100vh-9rem)]
      overflow-y-auto
      bg-white dark:bg-gray-900
      transition-transform duration-300
      md:translate-x-0
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      z-40
    `}>
      <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Categories</h1>
        <div className='flex flex-col gap-2'>
          <h2 className='text-lg font-bold'>Art</h2>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
