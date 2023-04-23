import React from 'react'

export const Pagination = ({totalPosts, postsPerPage, setCurrentPage, currentPage}) => {
    let pages = [];

    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i)
    }

    console.log(postsPerPage);
  return (
    <div className="pagination wrapper">
      {
        pages.map((page, index) => {
          console.log(page);
          return <button key={index} onClick={() => setCurrentPage(page)} className={page == currentPage ? 'active' : ''}>{page}</button>
        })
      }
    </div>
  )
}
