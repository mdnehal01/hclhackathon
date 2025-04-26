import React from 'react'

const footer = () => {
  return (
    <div>
      
    <footer className="bg-[#f8f9fa] text-center py-8 border-t border-gray-300 mt-10">
      <div className="container mx-auto px-4">
        {/* Main Footer Text */}
        <p className="text-gray-600 text-sm mb-4">
          © 2025 ifood. All rights reserved.
        </p>

        {/* Footer Links */}
        <div className="flex justify-center space-x-6 text-gray-500 text-sm">
          <a href="#" className="hover:text-black transition duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-black transition duration-300">Terms of Service</a>
          <a href="#" className="hover:text-black transition duration-300">Contact Us</a>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default footer
