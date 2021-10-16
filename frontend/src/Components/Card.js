import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import '../styles/card.css';

const Card = ({data}) => {
    return ( 
        <div className="single-card">
            <Flippy className="flip-main"
                flipOnHover={true} 
                flipOnClick={true} 
                flipDirection="horizontal"
            >   
                {/* prim rgb(187, 93, 26) */}
                {/* second  rgb(247, 215, 192) */}
            <FrontSide className="front">
                    <img alt="members-pic" className="mem-pic" src={data.img}/>
                    <h4 id="mem-name">{data.name}</h4>
                    <h6>{data.prof}</h6>
            </FrontSide>
            <BackSide className="back">
                    <p className="mem-desc">{data.desc}</p>
                    <div className="mem-socials">
                    <a href={data.socials.portfolio} target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-id-card"></i>
                    </a>
                    <a href={data.socials.email} target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-envelope"></i>
                    </a>
                    <a href={data.socials.linkedIn} target="_blank" rel="noopener noreferrer">
                        <i class="fa fa-linkedin" ></i>
                    </a>
                    <a href={data.socials.github} target="_blank" rel="noopener noreferrer">
                        <i class="fa fa-github" ></i>
                    </a>
                    <a href={data.socials.twitter} target="_blank" rel="noopener noreferrer">
                        <i class="fa fa-twitter" ></i>
                    </a>
                    </div>
            </BackSide>
            </Flippy>
        </div>
     );
}
 
export default Card;