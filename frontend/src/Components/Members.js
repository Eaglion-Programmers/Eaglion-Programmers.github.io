import React from 'react';
import Card from './Card';
import '../styles/members.css';

const Members = () => {

    const membersData=[
        {   
            "img":"/Community-Members-Images/g_sudarshan.jpg",
            "name":"Sudarshan Gawale",
            "prof":"Student @PICT",
            "desc":"I Like to contribute to Open Source... this is dummy DATA",
            "socials":
                {
                    "portfolio":"https://g-sudarshan.github.io/",
                    "github":"https://github.com/G-Sudarshan",
                    "linkedIn":"https://www.linkedin.com/in/g-sudarshan/",
                    "email":"gsudarshan11@gmail.com",
                    "twitter":"https://twitter.com/g_sudarshan11",
                }
            
        },
        {
            "img":"/Community-Members-Images/@thisisbillall.jpg",
            "name":"Mohammad Bilal",
            "prof":"Student @PICT",
            "desc":"Web/App developer works with REACT and FLUTTER frameworks.Open source Enthusiast etc..",
            "socials":
                {
                    "portfolio":"https://clearvoice.com/cv/MohammadBilal",
                    "github":"https://github.com/thisisbillall",
                    "linkedIn":"https://www.linkedin.com/in/mohammad-bilal-5a4457194/",
                    "email":"mail.thisisbillall@gmail.com",
                    "twitter":"https://twitter.com/thisisbillall",
                }
            
        },
        {

            "img":"/Community-Members-Images/SanikaPatil.png",
            "name":"Sanika Patil",
            "prof":"Student @PICT",
            "desc":"I Like to contribute to Open Source... this is dummy DATA",
            "socials":
                {
                    "portfolio":"",
                    "github":"https://github.com/Sanika2103",
                    "linkedIn":"",
                    "email":"",
                    "twitter":"https://twitter.com/Sanikaa_21",
                }
            
        },
        {
            "img":"/Community-Members-Images/MadhukrishnaNipankar.png",
            "name":"Madhukrishna",
            "prof":"Student @GP Nashik",
            "desc":"I Like to contribute to Open Source... this is dummy DATA",
            "socials":
                {
                    "portfolio":"",
                    "github":"https://github.com/MadhukrishnaNipankar",
                    "linkedIn":"",
                    "email":"",
                    "twitter":"https://twitter.com/home",
                }
            
        }
    ];
    return ( 
        <div className="card-container">
            <Card data={membersData[0]} />
            <Card data={membersData[1]}/>
            <Card data={membersData[2]}/>
            <Card data={membersData[3]}/>
            <Card data={membersData[3]}/>
            <Card data={membersData[3]}/>
        </div>
     );
}
 
export default Members;