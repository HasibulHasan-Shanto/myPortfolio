import React, { useEffect } from 'react'
import Container from './Container'

const Navbar = ({menuOpen , setMenuOpen}) => {
    useEffect(()=>{
        document.body.style.overflow = menuOpen ? "hidded" : ""
    }, [menuOpen])
  return (
    <div className='fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg '>
        <Container className=" ">
            <div className="flex justify-between items-center h-16">
                <a href="#" className='font-mono text-xl font-bold text-white'>
                shanto <span className='text-blue-500'>.dev</span>
                </a>
                <div onClick={()=> setMenuOpen((prev) => !prev)} className="w-7 h-5 relative cursor-pointer z-40 md:hidden">
                    &#9766;
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#" className='text-gray-300 hover:text-white transition-colors'>
                    Home
                    </a>
                    <a href="#about" className='text-gray-300 hover:text-white transition-colors'>
                    About
                    </a>
                    <a href="#project" className='text-gray-300 hover:text-white transition-colors'>
                    Project
                    </a>
                    <a href="#contact" className='text-gray-300 hover:text-white transition-colors'>
                    Contact
                    </a>
                </div>
                <button className='bg-blue-500 text-white py-3 px-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'>Download My Reusme</button>
            </div>
        </Container>
    </div>
  )
}

export default Navbar