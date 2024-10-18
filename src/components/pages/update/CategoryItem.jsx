import React from 'react'

const CategoryItem = ({title, count}) => {
  return (
    <div className='flex justify-between items-end py-2 mb-2'>
                <h6>{title}</h6>
                <p className='mb-0'>({count})</p>
     </div>
  )
}

export default CategoryItem