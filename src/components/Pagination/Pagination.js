import React, { useState } from 'react';
import './Pagination.css'
const Pagination = ({pages, selcted}) => {
  const [currentPage, setCurrentPage] = useState(1); // Initialize current page
  const totalPages = 10; // Set the total number of pages

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
//   const [items, setItems] = useState();

  return (
    <div className='pgination_container'>
        <div className='pagination_wrappper'>
        <div className='prev_button'>Prev</div>
        <div className='links'>
            {pages.map((data, index)=>{
                return <div className={`link ${selcted == index ? 'active_page' : ''}`}>{index}</div>
            })}
        </div>
        <div className='next_button'>Next</div>
        </div>

    </div>
  );
};

export default Pagination;