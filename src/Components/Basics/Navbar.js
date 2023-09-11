import React from 'react'

const Navbar = ({Filterfood, menuList}) => {
  return (
    <>
      <nav className='navbar'>
      <div className='btn-group'>
        {
            menuList.map((curElem)=>{
                return(
                    <button className='btn-group__item' onClick={()=> Filterfood(curElem)}>{curElem}</button>
                )
            })
        }
        {/* <button className='btn-group__item' onClick={() => SetmenuData(Menu)}>All</button> */}
      </div>

    </nav>
    </>
  )
}

export default Navbar