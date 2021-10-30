import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "../styles/card.css";
import { data } from "./Members";

const Card = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap",marginTop:"30px"}}>
      {data.map((data, key) => {
        return (
          <div key={key} >
            <Cards
              key={key}
              img={data.img}
              name={data.name}
              prof={data.prof}
              desc={data.desc}
              socials={data.socials}
            />
          </div>
        );
      })}
    </div>
  );
};

const Cards = ({ img, name, prof, desc, socials }) => {
  return (
    <div className="single-card" style={{margin:"10px"}}>
      <Flippy
        className="flip-main"
        flipOnHover={true}
        flipOnClick={true}
        flipDirection="horizontal"
      >
        {/* prim rgb(187, 93, 26) */}
        {/* second  rgb(247, 215, 192) */}
        <FrontSide className="front">
          <img alt="members-pic" className="mem-pic" src={img} />
          <h4 id="mem-name">{name}</h4>
          <h6>{prof}</h6>
        </FrontSide>
        <BackSide className="back">
          <p className="mem-desc">{desc}</p>
          <div className="mem-socials">
            <a
              href={socials.portfolio}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-id-card"></i>
            </a>
            <a href={socials.email} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href={socials.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a href={socials.github} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github"></i>
            </a>
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </BackSide>
      </Flippy>
    </div>
  );
};

export default Card;
