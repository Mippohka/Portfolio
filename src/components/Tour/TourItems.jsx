import React from 'react';


import Section from "../Section/Section";
import SectionTitle from "../Title/SectionTitle" ;

import SectionBanner from '../Title/SectionBanner'
import SectionCountry from '../Title/SectionCountry';



const TourItems = ( ) =>(
        <Section className="tour">
            <div className="container">
                <div className="">
                    <SectionTitle text="Концерты"/>
                </div>
                
                <div className="country">
                    <SectionCountry />

                </div>


                <div >
                    <SectionBanner textt="все концерты"/>
                </div>
            </div>        

        </Section>
        
 )

export default TourItems