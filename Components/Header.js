import Link from 'next/link';
import React from 'react';

const Header = (props) => {
    return (
        <>
         <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-between justify-between flex-shrink-0 text-white mr-6 w-screen px-10">
                <span className="font-semibold text-xl tracking-tight">React  Header Component</span>
                <div>
                    <ul className='flex gap-4 justify-end float-right '>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/About">About</Link></li>
                        <li><Link href="/Contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
            </nav>
        </>
    );
}

export default Header;