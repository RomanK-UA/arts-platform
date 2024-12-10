import React from 'react'
import HamburgerMenu from './HamburgerMenu'

const Header = () => {
    return (
        <header className='flex justify-center p-4 h-16 mx-auto border-b-2 border-yellow-500 text-2xl w-full md:text-3xl'>
            <div className='flex justify-between w-full md:max-w-7xl items-center'>
                <h1 className="text-transparent bg-clip-text hover:bg-gradient-to-l bg-gradient-to-r from-yellow-500 to-pink-500 text-5xl font-bold leading-tight hover:cursor-pointer bg-300% animate-gradient">
                    Fantasy
                </h1>
                <div>Account</div>
            </div>
        </header>
    )
}

export default Header