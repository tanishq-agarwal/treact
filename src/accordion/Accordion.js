import React, { useState } from 'react';
import { questions } from './api';
import "./accordion.css";

const Accordion = () => {
    const [data, setData] = useState(questions);
    const [selected,setSelected] = useState(null);
    const toggle = (i) => {
        if(selected === i){
            return setSelected(null);
        }
        setSelected(i);
    }
    return (
        <>
            <section className='main-div container'>
                <div className='faqs'>
                    <div className="title">
                        <h5 className='subheading'>FAQS</h5>
                        You have <p className='box'> Questions?</p>
                        <p className='subtext'>And we have got answers to all of them. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='wrapper'>
                        <div className='accordion'>
                            {data.map((item,i) => (
                                <div className='item' key={item.id}>
                                    <div className='title1' onClick={() => toggle(i)}>
                                        <h2>{item.question}</h2>
                                        <span>{selected === i ? '-' : '+'}</span>
                                    </div>
                                    <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Accordion;