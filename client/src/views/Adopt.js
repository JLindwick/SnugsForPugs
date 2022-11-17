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
                   Please fill out the form below to begin the pug adoption process! We strive to 
                   find the right pug for your family, with that being said please give as much information about the the needs or wants of a pug . 
                   Our staff will take your information and go through our list of breeders and try our best to fufill your wants and needs.
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