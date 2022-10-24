import React from 'react';
import './Pagination.css';

function Pagination({ UsersPerPage, totalUsers, currentPage, setCurrentPage }) {
    const pageNumbers = [];

    for(let pageNumber = 1; pageNumber <= Math.ceil(totalUsers / UsersPerPage); pageNumber++){
        pageNumbers.push(pageNumber);
    }
  return (
    <nav className='page-numbers'>
        {
            pageNumbers.map(pageNumber => (
                <span key={pageNumber} onClick={() => {setCurrentPage(pageNumber)}} className="page-number"
                    style={{
                        color: currentPage === pageNumber ? "white" : "black",
                        backgroundColor: currentPage === pageNumber ? "rgb(53, 112, 236)" : ""
                    }}
                >{pageNumber}</span>
            ))
        }
    </nav>
  )
}

export default Pagination;