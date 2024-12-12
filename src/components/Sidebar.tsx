import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-4 border-2 border-red-400 max-h-fit'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Categories</h1>
        <div className='flex flex-col gap-2'>
          <h2 className='text-lg font-bold'>Art</h2>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
