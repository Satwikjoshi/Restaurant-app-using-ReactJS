import React, { useState } from 'react'
import './Style.css'
import Menu from './MenuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList = [
  ...new Set(Menu.map((curElem) => {
    return curElem.category;
  })
  ),"All",

];

const Nav = () => {
    const [menuData, SetmenuData] = useState(Menu)
    const [menuList, SetmenuList] = useState(uniqueList)

    const Filterfood = (category)=>{
      if (category === "All") {
        SetmenuData(Menu);
        return;
      }
      const ListItems = Menu.filter((curElem) => {
        return curElem.category === category;
      })
      SetmenuData(ListItems)
    }

  return (
    <>
    <Navbar Filterfood={Filterfood} menuList={menuList}/>
     <MenuCard menuData={menuData}/>
    </>
  )
}

export default Nav