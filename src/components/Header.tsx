import Avatar from './Avatar'
import Search from './Search'

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = () => {
    return (
        <header className='col-span-full flex justify-center items-center p-4 h-16 mx-auto text-2xl md:text-3xl text-text w-full border-b-2 border-secondary  backdrop-blur-md sticky top-0 z-50'>
            <div className='flex justify-between w-full items-center gap-4 max-w-screen-2xl'>
                <div className='flex content-center '>
                    <button className="md:hidden p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                     </button>
                    <h1 className="text-transparent bg-clip-text hover:bg-gradient-to-l bg-gradient-to-r from-yellow-500 to-pink-500 text-2xl md:text-3xl lg:text-5xl font-bold hover:cursor-pointer bg-300% animate-gradient content-center">
                        <span>Fantasy</span>
                    </h1>
                </div>

                <Search />
                <div>
                    <Avatar src="/avatar.jpg" alt={"avatar"} width={40} height={40}/>
                </div>
            </div>
        </header>
    )
}

export default Header