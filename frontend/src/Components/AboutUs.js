import React from 'react';
import '../styles/about.css';
// import CommunityMembers from './CommunityMembers';

/*Note:- This About Section is partially Completed ! It will be updated soon..*/
const AboutUs = () => {
    return (
        <>
            <div className="aboutComponent">
                <div id="Catchy-Line" className="AboutUs-Items ">
                    <p className="Catchy-Line-Partial">In the World Of Competitive Programming and Data Structures, </p>
                    <h1 className="Catchy-Line-Main">We are here , to Aware Students about Hands On Development with Open Source Contributions !</h1>
                </div>

                <div className="AboutUs-Items">
                    <p>An Overview to Our Repository :)</p>
                    <div className="RepositorySS">
                        <img id="screenShot-Image" src="Images/RepositorySS2.png" alt="" />
                    </div>
                    <div className="Join-Us">
                        <a href="https://auto-joiner-eaglion.herokuapp.com/" target="blank"><button className="button flex" ><span>Join Us Here</span><i className="fas fa-arrow-right"></i></button></a>
                    </div>
                </div>

                {/* <div id="Community-Managers" className="AboutUs-Items top-margin ">
                    <h2 className="centerText">Our Community Managers</h2>
                    <CommunityMembers/>
                </div> */}
            </div>
        </>

    );
}

export default AboutUs;
<>

</>
