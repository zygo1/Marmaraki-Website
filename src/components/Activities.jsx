/* <iframe src="https://www.google.com/maps/d/embed?mid=1bC3gy1XPLJAvGhD0x4wTUeroHT4xP2zA&ehbc=2E312F" width="640" height="480"></iframe> */
import meteora_trails from ".././assets/meteora_trails.jpg";
import meteora_fly from ".././assets/meteoraflyadventures.jpg";
import meteora_ebike from ".././assets/meteora_ebike.jpg";
import ".././styles/Activities.css";

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
        <section className="activities">
            {activitiesArray.map((activity) => {
                return (
                    <div className="container">
                        <a href={activity.link} target="_blank">
                            <div className="image"><img src={activity.image} /></div>
                        </a>
                        <div className="title">{activity.name}</div>
                        <div>{activity.info}</div>
                    </div>
                )
            })}
        </section>
    )
};

export default Activities;