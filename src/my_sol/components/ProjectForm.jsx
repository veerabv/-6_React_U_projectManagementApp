import React from 'react'

const ProjectForm = () => {
  return (
    <form>
        <div className='flex justify-end'>
        <button className='mr-3'>Cancel</button>
        <button type="submit" className='bg-gray-900 px-6 py-2 rounded-lg text-zinc-100 '>Save</button>
        </div>
    </form>
  )
}

export default ProjectForm