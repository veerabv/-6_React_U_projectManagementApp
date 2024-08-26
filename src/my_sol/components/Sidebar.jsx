import React from 'react'

const Sidebar = ({setFormState}) => {
  return (
    <div className='h-svh bg-gray-900 rounded-tr-xl p-8'>
        <h3 className='text-zinc-50 text-lg font-semibold mb-5'>  YOUR PROJECTS</h3>
        <button className='bg-gray-600 px-2 py-4 rounded-lg text-zinc-100' onClick={()=>setFormState()}>+ Add Project</button>
    </div>
  )
}

export default Sidebar;