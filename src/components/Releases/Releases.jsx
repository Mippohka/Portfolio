import React  from 'react';

import Reles__one from './../../images/releases__one.jpg'; 
import Reles__two from './../../images/Reles__two.jpg'; 
import Reles__three from './../../images/releases__three.jpg';


import ScrollAnimation from "react-animate-on-scroll"


const Releases = () =>  (
    <div className="Releases">
        <div className="container">
            <div className="Releases__title"> РЕЛИЗЫ</div>
            <div className="releases__one">
                <div className="reles__one-item">
                    <img className="releas__img-one" src={Reles__one} alt="" />
                    <p className="releas__p-one">11 АВГ 2023</p>
                </div>
                <h3 className="releas__h3-one">Лига опасного <br/>интернета</h3>
            </div>

           <div className="releases__two-item">

            <div className="releases__two">
                    <div className="reles__item-two">
                        <p className="releas__p-two">1 сен 2023</p>
                        <img className="releas__img-two" src={Reles__two} alt="" />
                        
                    </div>

                    <div className="releas__h3-item">
                        <h3 className="releas__h3-two">1.Kla$</h3>
                    </div>  
                </div>
           </div>
                
            <div className="releases__three">
                <div className="reles__one-item">
                    <img className="releas__img-three" src={Reles__three} alt="" />
                    <p className="releas__p-one">4 сен 2019</p>
                </div>
                
                <h3 className="releas__h3-one">В долгий путь</h3>
            </div>
            

            <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft" className="text__all-reseal">
                <h3>все релизы
                
                </h3>
                <div className="reales__line"></div>
                
            </ScrollAnimation>


        </div>
       
            
    </div>
  )


export default Releases