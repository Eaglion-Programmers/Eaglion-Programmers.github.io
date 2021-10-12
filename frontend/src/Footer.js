import React from "react"
import "./Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import FacebookIcon from '@mui/icons-material/Facebook';
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import GroupIcon from '@mui/icons-material/Group';
import ScreenSearchDesktopTwoToneIcon from '@mui/icons-material/ScreenSearchDesktopTwoTone';


function Footer(props)
 {
  return (
    
      <footer className="footer"  >
        <div className="footer-left col-md-4 col-sm-6">
          <p className="about">
            <span> About Community <GroupIcon/></span> <h5><strong> Eaglion-Programmers.</strong></h5><br/>A group of open source enthusiasts across Maharashtra.
          </p>
          
          <div className="icons
          _div">
{/* //             <a href="https://www.facebook.com/profile.php?id=100008415699101">
//             <FacebookIcon/></a> */}
            <a href="https://auto-joiner-eaglion.herokuapp.com/"><LinkIcon/></a>
            <a href="https://twitter.com/g_sudarshan11"><TwitterIcon/></a>
            <a href="https://www.linkedin.com/in/pratik-patil-99921a193?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bafm9npnyRxqVdaVm2m5wXQ%3D%3D"><LinkedInIcon/></a>
            
            <a href="https://www.instagram.com/tension_not_pratik/"><InstagramIcon/>
</a>
            
          </div>
        </div>
        <div className="footer-center col-md-4 col-sm-6">
          <div>
            <RoomIcon/>
            <p><span> Eaglion-Programmers Team</span>  Pune, Maharashtra, India</p>
          </div>
          <div>
            <EmailIcon/>
            <p><a href="mailto:eaglion.programmers@gmail.com">eaglion.programmers@gmail.com</a></p>
          </div>
        </div>
        <div className="footer-right col-md-4 col-sm-6">
          <h2> Eaglion-Programmers <span><img src="https://avatars.githubusercontent.com/u/89236554?s=200&v=4"  height='50px' /></span></h2>
          <p className="menu ml-6">
            <a href="https://github.com/Eaglion-Programmers"> Home  </a>   |
            <a href="https://github.com/orgs/Eaglion-Programmers/repositories"> Repositories</a>   |
            <a href="https://github.com/orgs/Eaglion-Programmers/people"> Members</a>   |
            
          </p>
          <p className="name"> Eaglion-Programmers Team &copy; 2021</p>
        </div>
      </footer>



  );
};

export default Footer;
