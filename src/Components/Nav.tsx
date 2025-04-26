import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="text-lg font-bold">MyApp</div>
            <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="/about" className="hover:text-gray-400">About</a></li>
            <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav