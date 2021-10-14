/*Author : Madhukrishna Vinod Nipankar*/
import React from 'react'
import '../styles/footer.css';

/*Note :  This footer is under development phase ! It Can change in future , according to suggestions*/
export default function Footer() {

  return (

    <footer className="footer">

      <div className="titleContainer ">
        <img id="Eaglion-Logo-Img" src="Images/logo.jpeg" alt="Eagle" />
        <div id="Eaglion-Footer-title">Eaglion-programmers-Community</div>
      </div>

      <div className="mainContainer ">

         {/* description about community  */}
        <div className="aboutSection width  height margin padding">
          Eaglion Programmers is student-developer's organization aiming to help new developers into Open source and provides many more resource for Development / CP etc.
        </div>
        {/*Explore */}
        <div className="Explore width  height margin padding">
          <div className="ExploreTitle largeFont">
            Explore
          </div>

          <div className="links">
            <ul>
              <li><a href="https://eaglion-programmers.netlify.app/">Home</a></li>
              <li><a href="https://eaglion-programmers.netlify.app/">About Us</a></li>
              <li><a href="https://eaglion-programmers.netlify.app/">Contact</a></li>
              <li><a href="https://eaglion-programmers.netlify.app/">Members</a></li>
            </ul>
          </div>
        </div>

        {/* join us  */}
        <div className="joinUs width  height margin padding">
          <div className="formTitle largeFont">
            Want to Join Our Community ? Just a few Steps to go!
          </div>

          <form action="#">
            <i className="far fa-envelope"></i>       {/* envelop icon */}
            <input type="email" name="" id="user-email-id" placeholder="Enter your email-id" required />
            <a href="https://auto-joiner-eaglion.herokuapp.com/" target="blank">  <button type="submit" prevent="default"><i className="fas fa-arrow-right"></i></button></a>
          </form>

        </div>

        {/* follow Us  */}
        <div className="followUs width  height margin padding">

          You can follow us Here :


          <div className="social-links">
            <a id="email" href="mailto:eaglion.programmers@gmail.com" target="blank"><i className="far fa-envelope"></i></a>
            <a id="twitter" href="https://twitter.com/g_sudarshan11" target="blank"><i className="fab fa-twitter"></i></a>
            <a id="github" href="https://github.com/Eaglion-Programmers" target="blank"><i className="fab fa-github" ></i></a>
            <a id="linkedin" href="https://www.linkedin.com/in/g-sudarshan/?originalSubdomain=in" target="blank"><i className="fab fa-linkedin-in"></i></a>
          </div>

        </div>

      </div>

      <div className="beMember centerText small padding">
        Become the member of our Github Organization :
        <div><a href="https://auto-joiner-eaglion.herokuapp.com/" >Click Here !</a></div>
      </div>

      <div className="copyrightContainer italic centerText ">
        Eaglion-Programmers  &copy; 2021 - All Rights Reserved
      </div>

    </footer>
  );
}
