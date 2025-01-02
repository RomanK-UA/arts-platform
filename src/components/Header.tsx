import Avatar from './Avatar'
import Search from './Search'

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = () => {
    return (
        <header className='col-start-2 flex justify-center items-center h-16 text-2xl md:text-3xl text-text w-full border-b-2 border-secondary  backdrop-blur-md sticky top-0 z-50'>
            <div className='flex justify-between w-full items-center gap-4 max-w-screen-2xl'>
                <div className='flex content-center '>
                    <button className="md:hidden p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                     </button>

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