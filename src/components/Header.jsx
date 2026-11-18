import { ChevronDown, Heart } from 'lucide-react'
import links from '../data/Navbar.js'
import { useRef, useState } from "react";




const Header = () => {
  const[showMenu, setShowMenu] = useState(false);
  const closeMenuTimeout = useRef(null);
  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#home" className="text-2xl font-bold tracking-tight text-white">
          zaeem web
        </a>
        <ul className="flex justify-between gap-8"> 
    
           
            {links.map((el)=> (
                <li>
                    {el.children ? 
                    <div
                      className="relative "
                      onMouseEnter={() => clearTimeout(closeMenuTimeout.current)}
                      onMouseLeave={() => {
                        closeMenuTimeout.current = setTimeout(() => setShowMenu(false), 400);
                      }}
                    >

                    <span className="flex items-center gap-1 cursor-pointer"
                    onClick={() => setShowMenu((open) => !open)}
                    >{el.name} <ChevronDown size={14} 
                     className={`${showMenu ? "rotate-180" : ""} `} />
                    </span> 





                       
                     {showMenu && (
                          <ul  className="absolute bg-white shadow-lg w-46 text-black rounded top-12  ">
                         {el.children.map((el =>
                        <li>
                          <a className="block p-2  hover:bg-gray-200 duration-200" href={el.link} >
                          {el.name}
                        </a></li>
                      ))}
                      </ul>
                     )}
 
                    </div>

                     :<a href={el.link}>{el.name}</a> }

                </li>
            ))}
            </ul>
        <a
          href="#contact"
          className="shrink-0 rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Let&apos;s talk
        </a>
      </div>
    </header>
  )
}

export default Header;