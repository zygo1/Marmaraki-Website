import meteora_trails from "../../assets/meteora_trails.jpg";
import meteora_fly from "../../assets/meteoraflyadventures.jpg";
import meteora_ebike from "../../assets/meteora_ebike.jpg";
import museum_greek_education from "../../assets/culture/greek-education.jpg";
import natural_history from "../../assets/culture/natural-history-meteora.jpg";
import geological from "../../assets/culture/geological_formations.jpg";
import "./Activities.css";
import ScrollToTop from "../ScrollToTop/ScrollToTop";


const Container = (props) => {

    return (
        <>
            <div className="container activities" key={props.key}>
                <a href={props.link} target="_blank" rel="noreferrer">
                    <div className="image"><img src={props.image} alt={props.name} /></div>
                </a>
                <div className="title">{props.name}</div>
                <div className="info-container">{props.info}</div>
            </div>
        </>
    );
};

const Activities = () => {
    const activitiesArray = [
        {
            "name": "Meteora Trails",
            "link": "https://meteoratrails.com/",
            "image": meteora_trails,
            "info": "Walk among the stone giants!"
        },
        {
            "name": "Meteora Fly Adventures",
            "link": "https://www.meteoraflyadventure.com/",
            "image": meteora_fly,
            "info": "Fly around Meteora with safety!"
        },
        {
            "name": "Meteora e-bike",
            "link": "https://meteoraebike.com/",
            "image": meteora_ebike,
            "info": "Try out a bike tour around Meteora!"
        }
    ];

    const cultureArray = [
        {
            "name": "Museum of Greek Education",
            "link": "https://www.bookmuseum.gr/",
            "image": museum_greek_education,
            "info": "Discover the timeless treasures of Greek education at the captivating museum."
        },
        {
            "name": "Museum of Natural History of Meteora and Mushroom Museum",
            "link": "https://meteoramuseum.gr/",
            "image": natural_history,
            "info": "Embark on a fascinating journey through the wonders of nature at the Museum of Natural History of Meteora"
        },
        {
            "name": "Museum of Geological Formations of Meteora",
            "link": "https://goo.gl/maps/XkTgVBDGwUNPaD1W6?coh=178572&entry=tt",
            "image": geological,
            "info": "Unearth the ancient mysteries and geological wonders at the Museum of Geological Formations of Meteora."
        }
    ];

    return (
        <>
            <div className="section-divider"> <span className="section-label">Activities</span></div>
            <section className="activities">
                {activitiesArray.map((activity, index) => {
                    return (
                        <Container
                            key={index}
                            name={activity.name}
                            link={activity.link}
                            image={activity.image}
                            info={activity.info}
                        />
                    )
                })}
            </section>
            <div className="section-divider"><span className="section-label">Culture</span></div>
            <section className="activities">
                {cultureArray.map((museum, index) => {
                    return (
                        <Container
                            key={index}
                            name={museum.name}
                            link={museum.link}
                            image={museum.image}
                            info={museum.info}
                        />
                    )
                })}
            </section>
            <ScrollToTop />
        </>
    )
};

export default Activities;