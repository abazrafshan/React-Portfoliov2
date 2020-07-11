import React from "react";
import "./PortfolioProjects.css";
import thievesmonopoly from "../../Assets/Images/thievesmonopoly.png";
import YouMDb from "../../Assets/Images/YouMDb.png";
import passwordgen from "../../Assets/Images/passwordgen.png";
import Burgerlogger from "../../Assets/Images/Burgerlogger.png";
import weather from "../../Assets/Images/weather.png";
import workday from "../../Assets/Images/workday.png";


export default function PortfolioProjects(){
    return(
        <div className="container float-left margin" style={{marginBottom: "100px"}}>
        <div className="row">
            <div className="col-md-8">
                <div className="block padding">
                <h3 className="textcolor ">Portfolio</h3>
                <hr/>
                {/* Responsive sizing to display portfolio images and associated banners */}
                <div className="row">
                    <div className="col-sm-6 col-md-12 col-lg-6">
                        <a href = "https://morning-earth-32122.herokuapp.com/game"><img src={thievesmonopoly} alt="Thieves Monopoly" className="card-img img-fluid thumbnail"/></a>
                        <h3 className="banner"><a href = "https://github.com/abazrafshan/Project2Game">Thieves Monopoly</a></h3> 
                    </div>
                    <hr/>
                    <div className="col-sm-6 col-md-12 col-lg-6">
                        <a href = "https://abazrafshan.github.io/YouMDb-Movie-App/"><img src={YouMDb} alt="YouMDb" className="card-img img-fluid thumbnail"/></a>
                        {/* banner className provides responsive sizing of banner width to closely align with thumbnail width, along with aesthetic enhancements  */}
                        <h3 className="banner"><a href = "https://github.com/abazrafshan/YouMDb-Movie-App">YouMDb Movie App</a></h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-12 col-lg-6">
                        <a href = "https://abazrafshan.github.io/WeatherDashboard/"><img src={weather} alt="Weather Dashboard" className="card-img img-fluid thumbnail"/></a>
                        <h3 className="banner"><a href = "https://github.com/abazrafshan/WeatherDashboard">Weather Dashboard</a></h3>
                    </div>
                    <hr/>
                    <div className="col-sm-6 col-md-12 col-lg-6">
                        <a href ="https://shrouded-fjord-25692.herokuapp.com/"><img src={Burgerlogger} alt="Burger Logger" className="card-img img-fluid thumbnail"/></a>
                        <h3 className="banner"><a href = "https://github.com/abazrafshan/BurgerLogger">Burger Log</a></h3>
                    </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-md-12 col-lg-6">
                      <a href = "https://abazrafshan.github.io/Work-Day-Scheduler/"><img src={workday} alt="Work Day Scheduler" className="card-img img-fluid thumbnail"/></a>
                      <h3 className="banner"><a href = "https://github.com/abazrafshan/Work-Day-Scheduler">Work Day Scheduler</a></h3>
                  </div>
                  <hr/>
                  <div className="col-sm-6 col-md-12 col-lg-6">
                      <a href ="https://abazrafshan.github.io/PasswordGenerator/"><img src={passwordgen} alt="Password Generator" className="card-img img-fluid thumbnail"/></a>
                      <h3 className="banner"><a href = "https://github.com/abazrafshan/PasswordGenerator/">Password Generator</a></h3>
                  </div>
              </div>
            </div>
            </div>
        </div>
    <br></br>
    </div>
    )
}