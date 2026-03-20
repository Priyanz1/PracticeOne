import React from 'react'

function Navbar() {
    return (
        <div className='w-full flex align-center justify-between sm:justify-around px-8 py-6 '>
            <img className='text-xl' alt="Forever" />

            <div className='hidden md:flex items-center justify-between gap-6'>
                <a href="">HOME</a>
                <a href="">COLLECTION</a>
                <a href="">ABOUT</a>
                <a href="">CONTACT</a>
            </div>
            <div className='flex gap-3'>
                <i className="ri-search-2-line text-xl"></i>
                <i className="ri-account-circle-line text-xl"></i>
                <i className="ri-handbag-line text-xl"></i>
                <i className="ri-menu-line text-xl sm:hidden md-hidden lg:hidden"></i>
            </div>
        </div>
    )
}

export default Navbar