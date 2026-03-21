import React from 'react'
import { HashLink } from 'react-router-hash-link'

function Navbar() {
    return (
        <div className='w-full flex items-center justify-between sm:justify-around px-8 py-6 x-2 fixed z-10 bg-white'>
            <img className='text-xl' alt="Forever" />

            <div className='hidden md:flex items-center justify-between gap-6'>
                <HashLink smooth to="/#home">HOME</HashLink>
                <HashLink smooth to="/#collection">COLLECTION</HashLink>
                <HashLink smooth to="/#best">BEST</HashLink>
                <HashLink smooth to="/#about">ABOUT</HashLink>
                <HashLink smooth to="/#contact">CONTACT</HashLink>
            </div>
            <div className='flex gap-3'>
                <i className="ri-search-2-line text-xl"></i>
                <i className="ri-account-circle-line text-xl"></i>
                <i className="ri-handbag-line text-xl"></i>
                <i className="ri-menu-line text-xl sm:hidden md:hidden lg:hidden"></i>
            </div>
        </div>
    )
}

export default Navbar