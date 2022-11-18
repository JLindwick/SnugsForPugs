import React, { useEffect, useState} from 'react'
import PageNav from '../components/PageNav';
import PageFoot from '../components/PageFoot';
import AdoptForm from '../components/AdoptForm';
import './css/AdoptView.css'
import '../fonts/style.css'


function Adopt() {
    return (
        <>
            <div id="PageContainer">
                <div  id="NavStyle">
                    <PageNav />
                </div>
                <div>
                    <h3 id='headTitleStyle'>Adopt</h3>
                    <hr/>
                <p id='adoptStyle'>
                Fill out the form below to begin your journey in the snuggly pug adoption process! 
                In our quest to find the right snuggly pug for you and your family, please give as much information as possible about the the needs and/or wants of your future pug . Our staff will take your information and go through our contact lists in order to do our best to fulfill your wants and needs.
                </p>
                <AdoptForm/>
                <br/>
                </div>
            </div>
            <PageFoot />
        </>
    );
}

export default Adopt