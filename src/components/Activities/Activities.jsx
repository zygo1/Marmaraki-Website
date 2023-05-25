import meteora_trails from "../../assets/meteora_trails.jpg";
import meteora_fly from "../../assets/meteoraflyadventures.jpg";
import meteora_ebike from "../../assets/meteora_ebike.jpg";
import "./Activities.css";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

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

    return (
        <>
            <section className="activities">
                {activitiesArray.map((activity, index) => {
                    return (
                        <div className="container" key={index}>
                            <a href={activity.link} target="_blank" rel="noreferrer">
                                <div className="image"><img src={activity.image} alt={activity.name} /></div>
                            </a>
                            <div className="title">{activity.name}</div>
                            <div>{activity.info}</div>
                        </div>
                    )
                })}
            </section>
            <ScrollToTop />
        </>
    )
};

export default Activities;