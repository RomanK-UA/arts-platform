
import Avatar from './Avatar'
import Search from './Search'
const Header = () => {
    return (
        <header className='flex justify-center p-4 h-16 mx-auto text-2xl w-full md:text-3xl backdrop-blur-md sticky top-0 z-50 '>
            <div className='flex justify-between w-full md:max-w-7xl items-center'>
                <h1 className="text-transparent bg-clip-text hover:bg-gradient-to-l bg-gradient-to-r from-yellow-500 to-pink-500 text-5xl font-bold leading-tight hover:cursor-pointer bg-300% animate-gradient">
                    Fantasy
                </h1>
                <Search />
                <div>
                    <Avatar src="/avatar.jpg" alt={"avatar"} width={40} height={40}/>
                </div>
            </div>
        </header>
    )
}

export default Header