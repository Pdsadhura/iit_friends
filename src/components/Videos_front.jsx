import React from "react";
import "../styles/Videos.css";
import "../styles/index.css";

function Videos_front(Select)
{
   
 return(
        
<div className="Front_videos"> 
<div className="Front_videos_img">
  <img src={Select.video_img}/>
</div>
<div className="Front_videos_details">
    <div id="profile">
    <img src="https://img.icons8.com/color/40/000000/user-location.png"/>
    </div>
    <div id="topic">
        <span><h3>{Select.Topic}</h3></span>
        <span><h4>from {Select.From}</h4></span>
    </div>
</div>
</div>


    );
}
export default Videos_front;