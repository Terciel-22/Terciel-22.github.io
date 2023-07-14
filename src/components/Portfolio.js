import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="container">
                <h1 className="sub-title">My Work</h1>
                <div className="work-list">
                    <div className="work">
                        <img src="https://i.pinimg.com/originals/29/5a/d5/295ad5526a6c566a415776b9dede64f9.jpg" alt="Admin dashboard" />
                        <div className="layer">
                            <h3>Countries</h3>
                            <p>Displaying countries' information and data from REST API.</p>
                            <a href="https://terciel-rest-countries-api.vercel.app/">
                                <FontAwesomeIcon icon={faExternalLinkAlt}/>
                            </a>
                        </div>
                    </div>
                    <div className="work">
                        <img src="https://i.pinimg.com/originals/d7/47/54/d74754d5da405862143541057f927f9d.png" alt="Mobile App UI" />
                        <div className="layer">
                            <h3>E-commerce on Mobile</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus enim modi deserunt iste non.</p>
                            <a href="#ecommerceonmobile">
                                <FontAwesomeIcon icon={faExternalLinkAlt}/>
                            </a>
                        </div>
                    </div>
                    <div className="work">
                        <img src="https://miro.medium.com/max/1400/1*nBqv7k7nOFj5gv7JrPUugQ.jpeg" alt="Mobile App UI" />
                        <div className="layer">
                            <h3>Social Media App</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus enim modi deserunt iste non.</p>
                            <a href="#socialmediaapp">
                                <FontAwesomeIcon icon={faExternalLinkAlt}/>
                            </a>
                        </div>
                    </div>
                </div>
                <a href="https://github.com/Terciel-22" className="btn">See more</a>
            </div>
        </section>
    )
}

export default Portfolio
