import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode,faCropAlt } from "@fortawesome/free-solid-svg-icons";
import { faAppStore } from "@fortawesome/free-brands-svg-icons";

const Services = () => {
    return (
        <section id="services">
            <div className="container">
                <h1 className="sub-title">My Services</h1>
                <div className="services-list">
                    <div className="services">
                        <FontAwesomeIcon icon={faCode} className="icon"/>
                        <h2>Web Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus enim modi deserunt iste non. Tenetur, debitis dolor eos earum numquam accusamus. Quaerat sequi, mollitia a hic minima sit cumque!</p>
                        <a href="#webdesign">Learn more</a>
                    </div>
                    <div className="services">
                        <FontAwesomeIcon icon={faCropAlt} className="icon"/>
                        <h2>UI/UX Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus enim modi deserunt iste non. Tenetur, debitis dolor eos earum numquam accusamus. Quaerat sequi, mollitia a hic minima sit cumque!</p>
                        <a href="#webdesign">Learn more</a>
                    </div>
                    <div className="services">
                        <FontAwesomeIcon icon={faAppStore} className="icon"/>
                        <h2>App Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus enim modi deserunt iste non. Tenetur, debitis dolor eos earum numquam accusamus. Quaerat sequi, mollitia a hic minima sit cumque!</p>
                        <a href="#webdesign">Learn more</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services