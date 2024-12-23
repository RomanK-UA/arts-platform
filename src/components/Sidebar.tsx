import React from 'react'
import Button from './Button';

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
      rounded-md
      bg-dark
    `}>
      <div className='flex flex-col gap-4 sticky top-[100px] border-2 border-green-400 w-full p-4'>
        <Button size='sm' variant='filter'>Click</Button>
        <Button 
    variant="ghost" 
    icon={
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
    }
>like</Button>
<Button 
    variant="outline" 
    size="lg"
    icon={
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
    }
>
    Subscribe
</Button>
      </div>
    </aside>
  )
}

export default Sidebar
