import './Monasteries.css';
import holy_trinity from '../../assets/monasteries/agia-triada.jpg'
import saint_nicholas from '../../assets/monasteries/agios-nikolaos.jpeg'
import great_meteoron from '../../assets/monasteries/great-meteoron.jpg'
import varlaam from '../../assets/monasteries/varlaam.jpg'
import roussanou from '../../assets/monasteries/roussanou.jpg'
import saint_stephen from '../../assets/monasteries/saint-stephen.jpg';
import { useState } from 'react';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Divider from '../Divider/Divider';


const Monastery = ({ monastery, index }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleInfo = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`container monasteries ${isExpanded ? 'expanded' : ''}`} key={index}>
            <a href={monastery.link} target="_blank" rel="noreferrer">
                <div className="image"><img src={monastery.image} alt={monastery.name} /></div>
            </a>
            <div className="title">{monastery.name}</div>
            <div className='button-location'>
                <div></div>
                <button onClick={toggleInfo} className='info-button'>{isExpanded ? "Hide information" : "See more information"}</button>
                <a href={monastery.link} target="_blank" rel="noreferrer" className='location'>
                    <span className="material-symbols-outlined">
                        location_on
                    </span>
                </a>
            </div>
            {isExpanded ?
                <article className='information'>
                    <p>{monastery.info}</p>
                    <p className='hours'>Opening hours: </p>
                    <span>{monastery.hours[0]}</span> <br />
                    <span>{monastery.hours[1]}</span> <br />
                    <span>{monastery.hours[2]}</span> <br />
                    <span>{monastery.hours[3]}</span> <br />
                    <span>{monastery.hours[4]}</span> <br />
                    <span>{monastery.hours[5]}</span> <br />
                    <span>{monastery.hours[6]}</span>
                </article> : null}
        </div>
    )
};

const Monasteries = () => {

    const monasteriesArr = [{
        "name": "Monastery of Great Meteoron",
        "image": great_meteoron,
        "link": "https://goo.gl/maps/2pjJdRwBEzWNELCLA?coh=178572&entry=tt",
        "info": "The Great Meteoron Monastery is an impressive Eastern Orthodox monastery located in central Greece. It is one of the six active monasteries situated atop the towering rock formations of Meteora. Founded in the 14th century by Saint Athanasius the Meteorite, the monastery's construction was a remarkable feat. Today, it stands as a testament to Byzantine architecture and attracts visitors from around the world. Proper attire is required, and inside, you can explore chapels, libraries, and a museum with religious artifacts. The monastery offers breathtaking panoramic views of the surrounding landscape.",
        "hours": ["Monday 9:30 - 15:00", "Tuesday Closed", "Wednesday 9:30 - 15:00", "Thursday 9:30 - 15:00", "Friday 9:30 - 15:00", "Saturday 9:30 - 15:00", "Sunday 9:30 - 15:00"]
    },
    {
        "name": "Monastery of Saint Nicholas",
        "image": saint_nicholas,
        "link": "https://goo.gl/maps/Qn7C6SaoVnCaBqHAA?coh=178572&entry=tt",
        "info": "The Holy Monastery of Agios Nikolaos Anapausas, is a prominent Eastern Orthodox monastery in Meteora. Founded in the 14th century, it is dedicated to Saint Nicholas. The monastery is perched on a high rock formation and showcases Byzantine architecture. Visitors can explore the main church, admire frescoes and icons, and experience the tranquil environment. Proper attire is required. The monastery attracts tourists and pilgrims seeking its historical, architectural, and spiritual significance.",
        "hours": ["Monday 9:00 - 17:00", "Tuesday 9:00 - 17:00", "Wednesday 9:00 - 17:00", "Thursday 9:00 - 17:00", "Friday 9:00 - 17:00", "Saturday 9:00 - 17:00", "Sunday 9:00 - 17:00"]
    },
    {
        "name": "Monastery of Roussanou",
        "image": roussanou,
        "link": "https://goo.gl/maps/RLhSTk5N921ARY8N8?coh=178572&entry=tt",
        "info": "The Roussanou Monastery, also known as the St. Barbara Monastery, is an active Eastern Orthodox monastery located in the Meteora region of central Greece. Founded in the 16th century, it was initially established as a convent for nuns. The monastery features Byzantine and post-Byzantine architecture and offers stunning views of the surrounding landscape. Visitors can explore chapels, courtyards, and living quarters. Proper attire is required, and the monastery is a UNESCO World Heritage site.",
        "hours": ["Monday 9:00 - 4:30", "Tuesday 9:00 - 4:30", "Wednesday Closed", "Thursday 9:00 - 4:30", "Friday 9:00 - 4:30", "Saturday 9:00 - 4:30", "Sunday 10:00 - 4:30"]
    },
    {
        "name": "Monastery of Varlaam",
        "image": varlaam,
        "link": "https://goo.gl/maps/RMW3cYdvTnvs1JCD9?coh=178572&entry=tt",
        "info": "The Varlaam Monastery is a remarkable Eastern Orthodox monastery situated in the Meteora region of central Greece. Established in the 14th century, it offers stunning views of the surrounding landscape. The monastery features Byzantine and post-Byzantine architecture, including a main church with beautiful frescoes. Visitors can explore chapels, libraries, and museums housing religious artifacts. Access is through a series of steps, and proper attire is required. The Varlaam Monastery is a UNESCO World Heritage site and attracts tourists and pilgrims seeking its cultural and spiritual significance.",
        "hours": ["Monday 9:00 - 16:00", "Tuesday 9:00 - 16:00", "Wednesday 9:00 - 16:00", "Thursday 9:00 - 16:00", "Friday Closed", "Saturday 9:00 - 16:00", "Sunday 9:00 - 16:00"]
    },
    {
        "name": "Monastery of Holy Trinity",
        "image": holy_trinity,
        "link": "https://goo.gl/maps/3Uk1Jsk65vCfirL39?coh=178572&entry=tt",
        "info": "The Holy Trinity Monastery, also known as the Monastery of Agia Triada, is a famous Eastern Orthodox monastery in Meteora, Greece. It was established in the 15th century and is dedicated to the Holy Trinity. The monastery is renowned for its dramatic location atop a towering rock pinnacle and combines Byzantine and post-Byzantine architectural styles. Visitors can climb carved steps or use nets and pulleys to access it. Proper attire is required. The monastery attracts tourists from around the world who seek its spiritual ambiance and awe-inspiring setting. It is a UNESCO World Heritage site.",
        "hours": ["Monday 10:00 - 16:00", "Tuesday 10:00 - 16:00", "Wednesday 10:00 - 16:00", "Thursday Closed", "Friday 10:00 - 16:00", "Saturday 10:00 - 16:00", "Sunday 10:00 - 16:00"]
    },
    {
        "name": "Monastery of Saint Stephen",
        "image": saint_stephen,
        "link": "https://goo.gl/maps/AfHdrdvQiwuj2YKJ9?coh=178572&entry=tt",
        "info": "The Saint Stephen Monastery, also known as the Monastery of Agios Stefanos, is a prominent Eastern Orthodox monastery located in the Meteora region of central Greece. Founded in the 15th century, it is dedicated to Saint Stephen. The monastery features a blend of Byzantine and post-Byzantine architecture and offers panoramic views of the surrounding landscape. Visitors can explore the church, admire frescoes and icons, and learn about the monastic tradition. Proper attire is required, and the monastery attracts tourists and pilgrims seeking its cultural and spiritual significance.",
        "hours": ["Monday Closed", "Tuesday 9:00 - 13:30 and 15:30 - 17:30", "Wednesday 9:00 - 13:30 and 15:30 - 17:30", "Thursday 9:00 - 13:30 and 15:30 - 17:30", "Friday 9:00 - 13:30 and 15:30 - 17:30", "Saturday 9:00 - 13:30 and 15:30 - 17:30", "Sunday 9:00 - 13:30 and 15:30 - 17:30"]
    },
    ];

    return (
        <>
            <Divider name="Monasteries" />
            <section className="monasteries-wrapper">
                {monasteriesArr.map((monastery, index) => {
                    return (
                        <Monastery key={index} monastery={monastery} />
                    )
                })}
            </section>
            <ScrollToTop />
        </>
    );
};

export default Monasteries;