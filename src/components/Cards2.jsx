import React from "react";
import "../styles/cards_all.css";
import "../styles/index.css";


function Cards2()
{
    return(
        <>
        <div className="Cards2_A">
        <div className="Cards2_container">
        <div className="Cards2_info" id="a" style={{backgroundImage:"URL(images/front_A.jpg)"}}  >
        <p >Notes</p>
        </div>  
        <div className="Cards2_info" id="b">
        <p >Doubt <br/> session</p>
        </div>
        <div className="Cards2_info" id="c">
        <p>Reference</p>
        </div>
       
        </div>
        <div className="Cards2_container_1">
            <h2>Learn through live session,<br/>QNA video for free.</h2><br/>
            <h4>Notes,Doubt session,Pdf,Chat<br/>vlogs option are paid</h4><br/>
            <button>BUY NOW</button>
        </div>
        </div>
       
      
        </>
    );
}
export default Cards2;