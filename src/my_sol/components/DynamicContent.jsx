import React from 'react';
import ProjectForm from './ProjectForm';


const DynamicContent = ({isForm , setFormState}) => {
  console.log(isForm,"DSC");
  
  return (
    // <div>DynamicContent</div>
    <>
    {isForm && <ProjectForm/>}
    </>
  )
}

export default DynamicContent