import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from './ImageSlider';

const Blogging = () => {
    return (
        <>
            <section className='blogging'>
                <div className='blog-title'>
                    <h1 className='services-heading'>Popular Blog <p className='box'>Posts.</p></h1>
                    <p className='sub-title'>Some amazing blog posts that are written by even more amazing people.
                    </p>
                </div>

                <div className='container blog-post'>
                <ImageSlider/>
                </div>
            </section>
        </>
    )
}

export default Blogging;