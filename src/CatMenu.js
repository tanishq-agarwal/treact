import React from 'react'

const CatMenu = ({filterItem,catItems,toggleActive,toggleActiveStyles}) => {
    return (
        <>
            <div className='menu-right'>
                {
                    catItems.map((curElem,index) => {
                        return <button className={toggleActiveStyles(index)} key={index} onClick={() => {filterItem(curElem); toggleActive(index);}}>{curElem}</button>
                    })
                }
                {/* <button className='menu-list brand' onClick={() => filterItem('starters')}>Starters</button>
                <button className='menu-list' onClick={() => filterItem('main')}>Main</button>
                <button className='menu-list' onClick={() => filterItem('soup')}>Soup</button>
                <button className='menu-list' onClick={() => filterItem('desserts')}>Desserts</button> */}
            </div>
        </>
    )
}

export default CatMenu;