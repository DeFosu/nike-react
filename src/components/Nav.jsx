import React from 'react'
import { hamburger } from '../assets/icons/index.js'
import { headerLogo } from '../assets/images'
import { navLinks } from '../constants/index.js'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img  src={headerLogo} 
                alt="NikeLogo"
                width={130}
                height={29} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item, index) => 
            <li key={item.label+index}>
              <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                {item.label}
              </a>
            </li>)}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav