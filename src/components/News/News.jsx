import React from 'react';
import { NEW } from './../../utils/constants';
import ScrollAnimation from "react-animate-on-scroll"






const News = () =>  (
    <div className="News">
        <div className="container">
            
        
        <h2 className='news__title'>новости</h2>
        <div className="news__info">
        
            {NEW.map(({ id, imges, news}) => (
            <a key={imges}>
                
                <img className='news__img' src={imges} alt="" />
                <p className='new__p'>{news}</p>
            </a>
        ))}

           
        </div>
        <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft" className="text__all-new">
                <h3>все новости
                
                </h3>
                <div className="new__line"></div>
                
            </ScrollAnimation>
        </div>
    </div>
  )

export default News