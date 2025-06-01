import React from 'react'

const navOptions = [
    {label: "// Profile", nav: "/"}, 
    {label: "// Projects", nav: "/"}, 
    {label: "// Experience", nav: "/"}, 
    {label: "// Contact", nav: "/"}, 
] 
const Header = () => {
  return (
    <nav className='absolute top-0 w-full p-4 px-8 flex flex-row justify-center'>
        <ul className='flex items-center gap-20'>
            {navOptions.map(({label, nav}, idx) => (
                <li 
                    key={idx}
                    className='underline-hover font-bold'
                >{label}</li>
            ))}
        </ul>
    </nav>
  )
}

export default Header