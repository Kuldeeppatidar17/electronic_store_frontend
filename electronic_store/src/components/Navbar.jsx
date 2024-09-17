import React from 'react'

function Navbar() {
  return (
    <div className='px-5 flex justify-between items-center bg-slate-700 py-6'>
  <h3 className='text-white font-serif text-2xl'>Electronic store</h3>
  <div className='flex-1 flex justify-center'>
    <ul className='text-white flex space-x-10 cursor-pointer'>
      <li className='px-5 hover:bg-slate-200 hover:text-black hover:rounded-2xl'>Home</li>
      <li className='px-5 hover:bg-slate-200 hover:text-black hover:rounded-2xl' >Services</li>
      <li className='px-5 hover:bg-slate-200 hover:text-black hover:rounded-2xl'>Shop</li>
      <li className='px-5 hover:bg-slate-200 hover:text-black hover:rounded-2xl'>Contact Us</li>
    </ul>
    
  </div>
</div>
  )
}

export default Navbar
