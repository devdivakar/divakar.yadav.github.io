import React, { useState } from 'react';
import './WorkExperience.css';

const WorkExperience = ({item}) => {
  // Using the state hook to manage state in functional components
  const [count, setCount] = useState(0);

  // Event handler function
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className='work_experience'>
      <div className='company_title'>{item.title}</div>
      <div className='company_name'>{item.company}</div>
      <div className='company_duration'>{item.startDate} - {item.endDate}</div>
      <div className="tasks">
        <ul>
        {item.tasks.map((task, index) => (
                <li key={index} className="task">{task}</li>
              ))}
        </ul>
    </div>
    <div className="chips">
              {item.skills.map((chip, index) => (
                <span key={index} className="chip">{chip}</span>
              ))}
            </div>
    </div>
  );
};

export default WorkExperience;
