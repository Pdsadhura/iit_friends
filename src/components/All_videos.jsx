import React from "react";
import "../styles/Videos.css";
import "../styles/index.css";

function All_videos(Select)
{
   
 return(
        
<div className="All_videos"> 
<div className="All_videos_img">
  <img src={Select.video_img}/>
</div>
<div className="All_videos_details">
    <div id="profile">
    <img src="https://img.icons8.com/color/40/000000/user-location.png"/>
    </div>
    <div id="topic">
        <h3>{Select.Topic}</h3>
        <span><h4>from {Select.From}</h4></span>
    </div>
</div>
</div>


    );
}
export default All_videos;