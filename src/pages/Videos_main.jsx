import React from "react";
import "../styles/videos_main.css";
import Navbar from "../components/Navbar.jsx";
import All_videos from "../components/All_videos";
import Main_videos_data from "../Data/Main_videos_data.jsx";
import Footer from "../components/Footer.jsx";

function videos_map(val){
 return( 
   <All_videos
     video_img={val.video_img}
     Topic={val.Topic}
     From={val.From}
   />
 );
}
function Videos_main()
{
    return(
        <>
        <Navbar Category="false" Searchbar="false"
         />
        <div className="Headline">
        <h1>Videos</h1>
        </div>
        <div className="Main_videos">
            {Main_videos_data.map(videos_map)}
        </div>
        <Footer/>
        </>
    );
}
export default Videos_main;