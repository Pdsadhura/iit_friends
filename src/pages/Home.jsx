import React from "react";
import '../styles/index.css';
import "../styles/section_first.css";
import Nav from "../components/Nav.jsx";
import Navbar from "../components/Navbar.jsx";
import Cards2 from "../components/Cards2.jsx";
import Videos_front from "../components/Videos_front.jsx";
import Educator_id from "../components/Educator_id.jsx";
import Footer from "../components/Footer.jsx";


function Home()
{
   
    return(
        <>
      <Navbar Category="false" Searchbar="false"
      />
 <section  className="Section_1">
      <div style={{backgroundImage:"URL(images/front.png)"}} className="IMG_1">
      <div id="Section_1_id">
      <h1>Learn from top<br/> IIT students</h1>
      <button>Start Learning</button>
      </div>
      </div>
      <div className="Cards_div">
    <div className="Cards_A">
          <div className="Learn_cards">
           <img id="helping" src="images/helping.png"/><br/>
           <span>Helping in your project</span>
          </div>
    </div>
    <div className="Cards_A">
          <div className="Help_cards">
          <img id="learning" src="images/learning.png"/><br/>
          <span>Learn more skills easly</span>
          </div>
    </div>
      </div>
      <div className="Cards_div_2">
      <Cards2/>
      </div>
 </section>

 <section className="Section_2">
 <div className="Sectinon_2_videos">
    <div className="Videos">
        <h3>Videos</h3>
    </div>
    <div className="Sectinon_2_videos_1">
      <Videos_front 
        video_img="images/front_video_1.jpg"
        Topic="Internet and web tecnology"
        From="IIt kanpur"
      />
      <Videos_front 
        video_img="images/front_video_2.jpg"
        Topic="Networking"
        From="IIt kanpur"
      />
      <Videos_front 
        video_img="images/front_video_2.jpg"
        Topic="Database and management system"
        From="IIt kanpur"
      />
    </div>
    <div className="Sectinon_2_button">
       <button id="Video_btn"><strong>VIEW MORE </strong></button>
    </div>
 </div>
 </section>


 <section  className="Section_3">
     <div className="Section_3_div">
         <img src="images/section_3.jpg"/>
     </div>
     <div className="Section_3_div_1">
     <h1>Develop Your skill<br/>With IITians</h1><br/>
     <h3>Learn through live session,doubt session<br/>QNA Videos and More</h3><br/>
     <button>Start learning</button>
     </div>
 </section>

 
 <section className="Section_4">
  <div className="Section_4_div">
    <h3>Connect With Your Educator</h3>
    <a href="#">View more...</a>
  </div>
  <div className="Section_4_educator">
  <div className="Educator_div">
     <Educator_id/>
     <Educator_id/>
     <Educator_id/>
  </div> 
  </div>
 </section>
 <section className="Section_5">
  <div className="Section_5_div">
   <h1> Download the<br/>App</h1>
   <h3>Learn anything , anywhere<br/>and also chat option<br/>available in the app.</h3>
   <a><img src="images/google_playstore.png"/></a>
  </div>
 </section>

   <Footer/>
 
  </>

    );
}
export default Home;

