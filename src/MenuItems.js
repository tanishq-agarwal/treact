import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { NavLink} from 'react-router-dom';

const MenuItems = ({menuData}) => {
  return (
    <>
        <section className='menu container' data-aos="fade-right">
                {menuData.map((curElem) => {
                    const { id, url, rating, vote, title, content, price } = curElem;
                    return (
                        <>
                            <div className='food-menu container' key={id}>
                                <NavLink to ="/signup" className='card-grid'>
                                    <div className='card-img'>
                                    <img src={url} alt={title}/>
                                        <div className='card-rating'>
                                            <div className='ratings'>
                                                <AiFillStar className='fillStar' />{rating}</div>
                                            <div className='votes'>{vote}</div>
                                        </div>
                                        <div className='cardhover'>
                                            <button className='btn card-button'>Buy Now</button>
                                        </div>
                                    </div>
                                    <div className='card-text'>
                                        <h5 className='card-title'>{title}</h5>
                                        <p className='card-content'>{content}</p>
                                        <p className='card-price'>{price}</p>
                                    </div>
                                </NavLink>
                            </div>
                        </>
                    )
                })}
            </section>
    </>
  )
}

export default MenuItems;