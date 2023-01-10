import user from "../assets/img/user.JPG";
import { Component } from "react";

class About extends Component {
    constructor()
    {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event)
    {
        event.preventDefault();
        const activeLink = document.querySelector(".active-link");
        activeLink.classList.remove("active-link");
        event.target.classList.add("active-link");
        const tab = document.getElementById(event.target.innerHTML);
        
        const activeTab = document.querySelector(".active-tab");
        activeTab.classList.remove("active-tab");
        tab.classList.add("active-tab");
    }

    render()
    {
        return (
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="about-col-1">
                            <img src={user} alt="" />
                        </div>
                        <div className="about-col-2">
                            <h1 className="sub-title">About Me</h1>
                            <p>I am a creative designer and developer, who aims to work with small businesses and marginalized communities to bring their passions to life. I offer both design and development services of web applications or websites.</p>
                            
                            <div className="tab-titles">
                                <p className="tab-links active-link" onClick={this.handleClick}>Skills</p>
                                <p className="tab-links" onClick={this.handleClick}>Experience</p>
                                <p className="tab-links" onClick={this.handleClick}>Education</p>
                            </div>
                            <div className="tab-contents active-tab" id="Skills">
                                <ul>
                                    <li>
                                        <span>UI/UX</span><br/>
                                        Designing Web/App interfaces
                                    </li>
                                    <li>
                                        <span>Web Development</span><br/>
                                        Web app Development
                                    </li>
                                    <li>
                                        <span>App Development</span><br/>
                                        Building Android/iOS apps
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-contents" id="Experience">
                                <ul>
                                    <li>
                                        <span>Freelance (2020-current)</span><br/>
                                        Takes random programming-related commission services.
                                    </li>
                                    <li>
                                        <span>Thesis (2018-2019)</span><br/>
                                        Develops a mobile game using Unity.
                                    </li>
                                    <li>
                                        <span>Internship (2018)</span><br/>
                                        Assisted in web development at <i>Pierre & Paul Solution</i>.
                                    </li>
                                    <li>
                                        <span>Projects (2018)</span><br/>
                                        Creates a simple E-commerce Website.
                                        Develops a Music Blog Website. 
                                        Build a simple Content Management System.
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-contents" id="Education">
                                <ul>
                                    <li>
                                        <span>College: BSIT (2015-2020)</span><br/>
                                        Graduated at <i>Cavite State University</i>.
                                    </li>
                                    <li>
                                        <span>High School (2011-2015)</span><br/>
                                        <i>Naic National High School</i>.
                                    </li>
                                    <li>
                                        <span>Elementary (2005-2011)</span><br/>
                                        <i>Kananga Central School</i>.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About