import React from 'react';
import {Link} from 'react-router'

const ResumeCard: ({resume}: {}) =>Element = () =>  ({ resume}: {resume: Resume}) =>{
  return (
    <Link to={`/resume/${resume.id}`} className='resume-card animate-in fade-in duration-1000'>ResumeCard</Link>
 <div>

    
 </div>  

)
}

export default ResumeCard