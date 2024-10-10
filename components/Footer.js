import React from 'react'

const Footer = () => {
  return (
    <div>
         <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="mb-2">© {new Date().getFullYear()} Techsuvi. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer