import React, { useState } from 'react';
import menuApi from "./API/menuApi";
import MenuItems from './MenuItems';
import CatMenu from './CatMenu';

const allCatValues = [...new Set(menuApi.map((curElem) => curElem.category ))];

console.log(allCatValues);
const Menu = () => {

    const [menuData, setMenuData] = useState(menuApi);
    const [catItems, setCatItems] = useState(allCatValues);
    const [style, setStyle] = useState({
        activeObject: null,
        objects: [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
    });

    const filterItem = (categItem) => {
        const updateItems = menuApi.filter((curElem) => {
            return curElem.category === categItem;
        });
        setMenuData(updateItems);
    }
  
  const toggleActive = (index) => {
    console.log("you just clicked");
    
    setStyle({ ...style, activeObject: style.objects[index]});
  };

  const toggleActiveStyles = (index) => {
      if(style.objects[index] === style.activeObject){
          return "menu-list brand"
      }
      else {
          return "menu-list"
      }
  }

    return (
        <>
            <section className="menu-main-container">
                <div className="container menu-container" data-aos="fade-right">
                    <div className='menu-left'>
                        <h1 className="title">
                            Checkout our <p className='box'>menu.</p>
                        </h1>
                    </div>
                    <CatMenu filterItem={filterItem} catItems={catItems} toggleActiveStyles={toggleActiveStyles} toggleActive={toggleActive}/>
                </div>
            </section>

            <MenuItems menuData={menuData}/>
        </>
    )
}

export default Menu;