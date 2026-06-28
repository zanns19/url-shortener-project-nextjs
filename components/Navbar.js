import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div className='flex items-center justify-between px-8 py-4 bg-blue-400'>
        <div className="logo text-2xl font-bold">Url<span className='text-amber-800'>Shortern</span></div>
        <div className="uls ">
            <ul className='flex items-center gap-4'>
                <Link href="/"><li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/shortener"><li></li>Shortener</Link>
                <Link href="/contact"><li></li>Contact</Link>
                <Link href='/shortener'><button  className='p-3 cursor-pointer rounded-xl bg-purple-300' >Try Now</button></Link>
                <Link href='/github'><button  className='p-3 cursor-pointer rounded-xl bg-purple-300' >Github</button></Link>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
