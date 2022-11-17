import React, { useEffect, useState} from 'react'
import axios from 'axios'
import PageNav from '../components/PageNav';
import PageCard from '../components/PageCard';
import PageFoot from '../components/PageFoot';
import './css/MainView.css'
import '../fonts/style.css'
import 'animate.css';

function Main() {
    function onClickHandler() {
        axios.get('https://dog.ceo/api/breed/pug/images/random')
        .then(res=>{
            document.getElementById('randomImage').src = res.data.message;
        })
        .catch(err => console.error(err));
    }
    useEffect(()=>{
        axios.get('https://dog.ceo/api/breed/pug/images/random')
            .then(res=>{
                document.getElementById('randomImage').src = res.data.message;
            })
            .catch(err => console.error(err));
    },[]);
    return (
        <>
            <div id="PageContainer">
                <div  id="NavStyle">
                    <PageNav />
                </div>
                <h3 id='headTitleStyle'>Our Mission</h3>
                <hr />
                <p id='missionStyle'>
                    Here at Snugs 4 Pugs, our mission is to provide great homes for little snuggly pugs everywhere!
                    Our focus is to find the right home for pugs, and the pug that best suites you. Please feel free to schedule
                    a phone appointment today to start the process of getting a pug. We only want whats best for the pugs so
                    we provide fully vaccinated and daily care routines to ensure the health of the pupper!
                </p>
                <h3 id="headTitleStyle" >Our Staff</h3>
                <hr />
                <br />
                <div id="Staff" >
                    <PageCard imageUrl={"https://img.freepik.com/premium-photo/cheerful-portrait-adult-man-his-lovely-old-pug-dog-together-against-blue-wall-background-concept-happiness-best-friends-people-animals-lifestyle_425263-4851.jpg"}
                        headerText={"Bradly Owens"} bodyText="Hello! I'm Brad! I have been breeding for over 10 years! I'm eager to find the right pupper for your family. " />
                    <PageCard imageUrl={"https://img.freepik.com/free-photo/surprised-young-woman-with-curly-bushy-hair-keeps-lips-folded-carries-pedigree-pug-dog-spends-free-time-home-with-pet-wears-pajama-sleepmask-isolated-pink-background-animals-concept_273609-60128.jpg?w=2000"}
                        headerText="Michelle Miller" bodyText="Hey there I'm Michelle, and I'm very passionate about pugs, I would love to help others gain the love that pugs have given me." />
                    <PageCard imageUrl={"https://media.istockphoto.com/id/1137542255/photo/smiling-gay-couple-with-pug-using-laptop-at-home.jpg?s=612x612&w=0&k=20&c=yZ369VgXSx00IzIgG6TENx3AK8uy0IeKJZ1_f1NKoj0="}
                        headerText="Kevin & Sam Cross" bodyText="Hey my fellow pug lovers! My partner and I have been finding good homes for pugs for over a decade. We will do whatever we can to get the right pug for you and your loved ones. " />
                    <PageCard imageUrl={"https://image1.masterfile.com/getImage/NjExMy0wNjcyMDg3MmVuLjAwMDAwMDAw=AE22Tb/6113-06720872en_Masterfile.jpg"}
                        headerText="Sarah Millar" bodyText="Hello!, I'm Sarah Millar. It is my mission to find the right pug for you and your loved ones!" />
                </div>
                <br/>
                <hr />
                <div id='randomPug'>
                    <div style={{"marginRight":"20%"}}>
                        <h3 id="headTitleStyle" >Click me!</h3>
                        <img onClick={onClickHandler} className="animate__animated animate__shakeX animate__infinite" id="imageStyle" src='../assets/images/dabPug.png' />
                    </div>
                    <div>
                        <img src='#' id='randomImage' alt='randomImage' />
                    </div>
                </div>
            </div>
            <PageFoot />
        </>
    );
}

export default Main;