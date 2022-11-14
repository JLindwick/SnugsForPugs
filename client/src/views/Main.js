import React, {useEffect,useState} from 'react'
import PageNav from '../components/PageNav';
import PageCard from '../components/PageCard';
import PageFoot from '../components/PageFoot';
import '../fonts/style.css'
function Main() {
    const NavStyle = {
        "width": "100%",
        "backgroundImage": "url('./images/6.jpeg')",
        "borderBottom":"1px solid black",
        "overflow":"hidden"
    }
    const Staff = {
        "display":"flex",
        "flexDirection":"row",
        "justifyContent":"space-between"
    }
    const PageContainer = {
        "width": "100%",
        "paddingBottom":"10%",
        "backgroundColor":"#e2dbd3",
        "fontFamily":"Balsamiq Sans"
    }
    const headTitleStyle = {
        "textAlign":"center",
        "marginTop":".5%",
        "fontWeight":"bold",
    }
    const missionStyle = {
        "width":"60%",
        "marginLeft":"20%",
        "fontSize":"25px"
    }
    return (
        <>
        <div id="PageContainer" style={PageContainer}>
            <div id="NavStyle" style={NavStyle}>
                <PageNav />
            </div>
            <h3 style={headTitleStyle}>Our Mission</h3>
            <hr />
            <br/>
            <p style={missionStyle}>
            Here at Snugs 4 Pugs, our mission is to provide great homes for little snuggly pugs everywhere! 
            Our focus is to find the right home for pugs, and the pug that best suites you. Please feel free to schedule 
            a phone appointment today to start the process of getting a pug. We only want whats best for the pugs so
            we provide fully vaccinated and daily care routines to ensure the health of the pupper!
            </p>
            <br/>
            <h3 id="headTitleStyle" style={headTitleStyle}>Our Staff</h3>
            <hr />
            <br/>

            <div id="staff" style={Staff}>
                <PageCard imageUrl={"https://img.freepik.com/premium-photo/cheerful-portrait-adult-man-his-lovely-old-pug-dog-together-against-blue-wall-background-concept-happiness-best-friends-people-animals-lifestyle_425263-4851.jpg"} 
                          headerText={"Bradly Owens"} bodyText="Hello! I'm Brad! I have been breeding for over 10 years! I'm eager to find the right pupper for your family. "/>
                <PageCard imageUrl={"https://img.freepik.com/free-photo/surprised-young-woman-with-curly-bushy-hair-keeps-lips-folded-carries-pedigree-pug-dog-spends-free-time-home-with-pet-wears-pajama-sleepmask-isolated-pink-background-animals-concept_273609-60128.jpg?w=2000"} headerText="Michelle Miller" bodyText="Hey there I'm Michelle, and I'm very passionate about pugs, I would love to help others gain the love that pugs have given me." />
                <PageCard imageUrl={"https://media.istockphoto.com/id/1137542255/photo/smiling-gay-couple-with-pug-using-laptop-at-home.jpg?s=612x612&w=0&k=20&c=yZ369VgXSx00IzIgG6TENx3AK8uy0IeKJZ1_f1NKoj0="} headerText="Kevin & Sam Cross" bodyText="Hey my fellow pug lovers! My partner and I have been finding good homes for pugs for over a decade. We will do whatever we can to get the right pug for you and your loved ones. " />
                <PageCard imageUrl={"https://image1.masterfile.com/getImage/NjExMy0wNjcyMDg3MmVuLjAwMDAwMDAw=AE22Tb/6113-06720872en_Masterfile.jpg"} headerText="Sarah Millar" bodyText="Hello!, I'm Sarah Millar. It is my mission to find the right pug for you and your loved ones!" />
            </div>
            <br/>
            <hr/>
        </div>
        <PageFoot/>

        </>
    );
}

export default Main;