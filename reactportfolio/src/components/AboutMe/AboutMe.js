import React from "react";
import "./AboutMe.css";
import aboutme from "../../Assets/Images/aboutme.jpg";

export default function AboutMe(){
    return (
        <div>
            <div className="container float-left">
                <div className="row">
                    <div className="col-md-8 p-3 mb-2 bg-white text-dark ">
                        <div className="block padding clearfix">
                        <h3 className="textcolor block-header">About Me</h3>
                        <hr />
                        {/* Profile picture with margin to the right of image to distance verbage from image  */}
                        <img src={aboutme} alt="profile pic" id="about-image" className="float-left margin-right"/>
                        <p className="textalignleft">Hi everyone! My name is Arash, I'm a Minnesota native living in the West Coast for the past six years, with the last three of those years residing in the Los Angeles area. </p>
                        
                        <p className="textalignleft">I'm excited for this journey and becoming a full stack developer! Feel free to browse this page and explore my projects, more to come!</p>
                        <a className="textalignleft" href = "https://www.linkedin.com/in/arashbazrafshan/">My LinkedIn page</a><br></br>
                        <a className="textalignleft" href = "https://github.com/abazrafshan">My Github Profile</a><br></br>
                        <a className="textalignleft" href = "../../Assets/Images/Arash Bazrafshan - Resume 1.pdf">My Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

