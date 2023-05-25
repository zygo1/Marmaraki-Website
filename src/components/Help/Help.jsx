import { useState } from 'react';
import './Help.css';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const Help = () => {
    const [activeIndex, setActiveIndex] = useState(null);


    // The initial state of activeIndex is null, so the first time will be false and it will be assigned the current index (e.g. 2).
    // If the activeIndex === index it will be assigned null and the dropdown will close.
    const handleListClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <div className='parent-component'>
                {/* FAQ */}
                <div className='faq'>
                    <h3>Frequently Asked Questions</h3>
                    <ul >
                        <li onClick={() => handleListClick(0)} className='outter-list'><span>How could I visit Meteora?</span><span className="material-symbols-outlined add">add</span></li>
                        {activeIndex === 0 && (
                            <div className='dropdowns'>
                                <div>
                                    <span className="material-symbols-outlined">local_taxi</span>
                                    If you need a taxi, you'll find a card placed on the table next to the
                                    door in order to contact the taxi service directly.
                                    Alternatively, feel free to give me a call at 6974472539,
                                    and I'll be more than happy to assist you in arranging a taxi service tailored to your needs.
                                </div>
                                <div>
                                    <span className="material-symbols-outlined">directions_bus</span>
                                    If you prefer to visit Meteora by bus, <a href='https://www.ktel-trikala.gr/?module=default&pages_id=45&lang=en' className='bus-schedule-link' target='_blank' rel="noreferrer">here</a> is the schedule you can refer to.
                                    While the bus conveniently visits all the monasteries, I would recommend considering alternative modes of transportation such as traveling by car or exploring on foot.
                                    These options can provide a more immersive and rewarding experience, allowing you to fully appreciate the breathtaking beauty of Meteora and its monasteries.
                                </div>
                                <div>
                                    <span className="material-symbols-outlined">directions_walk</span>
                                    Visiting Meteora on foot offers a truly immersive and awe-inspiring experience, but it's important to note that it is a significant undertaking that requires ample time
                                    and physical endurance. The routes through the paths and trails can be quite lengthy. It is crucial to plan accordingly, ensuring you have enough time and energy to fully
                                    enjoy the journey. However, the rewards are abundant as each step reveals breathtaking panoramic views and opportunities to capture the ethereal beauty of Meteora in photographs.
                                    Take advantage of the various vantage points along the way to rest, soak in the scenery, and appreciate the grandeur of the towering cliffs and monasteries that grace this
                                    unique landscape.
                                </div>
                                <div>
                                    <span className="material-symbols-outlined">directions_car</span>
                                    Visiting Meteora by car provides a convenient and flexible way to explore the awe-inspiring region. With the freedom to navigate at your own pace, you can easily access the various
                                    viewpoints and monasteries scattered across the landscape. Along the way, you can stop at designated parking areas and embark on short walks to fully appreciate the natural beauty that surrounds you.
                                </div>
                                <div>
                                    <span class="material-symbols-outlined">
                                        tips_and_updates
                                    </span>
                                    Tip for visiting Meteora:
                                    When planning your visit to the monasteries, keep in mind that wearing long skirts or long dresses for women and long pants for men is required as a sign of respect for the religious and cultural traditions of the region.
                                </div>
                            </div>
                        )}
                        <li onClick={() => handleListClick(1)} className='outter-list'><span>Which is the nearest Monastery to the village?</span><span className="material-symbols-outlined add">add</span></li>
                        {activeIndex === 1 && (<div className='dropdowns'><div><span className="material-symbols-outlined">church</span><span>The Monastery of St. Nicholas Anapausas is the closest monastery to Kastraki, located approximately 2 km or 1.2 miles away. Below is a map to help you find directions:</span></div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14597.5650155174!2d21.626871635109538!3d39.72257550990472!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13590fae0f2d615d%3A0x908f12f68ece6011!2zzpnOtc-BzqwgzpzOv869zq4gzpHOs86vzr_PhSDOnc65zrrOv867zqzOv8-FIM6Rzr3Osc-AzrHPhc-DzqwgzpzOtc-EzrXPjs-Bz4nOvQ!5e0!3m2!1sel!2sgr!4v1684844279882!5m2!1sel!2sgr"
                                width="600"
                                height="450"
                                allowFullScreen=""
                                className='iframe-saint-nicholas'
                                loading="lazy"
                                title="Embedded content Saint Nicholas"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>

                            <div>You can find directions to the rest of the monasteries by following the links below:
                                <ul >
                                    <li className='inner-list'><a href="https://goo.gl/maps/aj9kL5Y6tU8ZY9eo6?coh=178572&entry=tt" rel="noreferrer" target='_blank' className='monastery-links'>The Monastery of Great Meteoron</a> (Tip: Spectacular view)</li>
                                    <li className='inner-list'><a href="https://goo.gl/maps/FWpMG7WbrpPytsKm9?coh=178572&entry=tt" rel="noreferrer" target='_blank' className='monastery-links'>The Monastery of Saint Nicholas Anapausas</a> (Tip: Closest to Kastraki)</li>
                                    <li className='inner-list'><a href="https://goo.gl/maps/1R8QJ9CkRaU64zbb9?coh=178572&entry=tt" rel="noreferrer" target='_blank' className='monastery-links'>The Monastery of Roussanou</a></li>
                                    <li className='inner-list'><a href="https://goo.gl/maps/aboQMsZzxGjPRPoe6?coh=178572&entry=tt" rel="noreferrer" target='_blank' className='monastery-links'>The Monastery of Varlaam</a></li>
                                    <li className='inner-list'><a href="https://goo.gl/maps/bQcf2bsKZxmVyu3K9?coh=178572&entry=tt" rel="noreferrer" target='_blank' className='monastery-links'>The Monastery of Holy Trinity (Tip: Easy path)</a></li>
                                    <li className='inner-list'><a href='https://goo.gl/maps/wAaFCmZSipUwpfog8?coh=178572&entry=tt' rel="noreferrer" target='_blank' className='monastery-links'>The Monastery of Saint Stephan (Tip: Easy path)</a></li>
                                </ul>
                            </div>
                        </div>)}
                        <li onClick={() => handleListClick(2)} className='outter-list'><span>Which is the bus schedule?</span><span className="material-symbols-outlined add">add</span></li>
                        {activeIndex === 2 && (<div className='dropdowns'><div><span className="material-symbols-outlined">directions_bus</span><span>You could find information about the local bus schedule </span><a href='https://www.ktel-trikala.gr/?module=default&pages_id=45&lang=en' rel="noreferrer" className='bus-schedule-link' target='_blank'>here</a>.</div></div>)}
                        <li onClick={() => handleListClick(3)} className='outter-list'><span>Which is the WiFi name and password?</span><span className="material-symbols-outlined add">add</span></li>
                        {activeIndex === 3 && (<div className='dropdowns'><div><span className="material-symbols-outlined">wifi</span><span>WiFi name: Marmaraki / WiFi password: Marmaraki1515</span></div><span></span></div>)}
                        <li onClick={() => handleListClick(4)} className='outter-list'><span>What time is the check-out?</span><span className="material-symbols-outlined add">add</span></li>
                        {activeIndex === 4 && (<div className='dropdowns'><div><span className="material-symbols-outlined">check</span><span>The check-out is at 12:00 PM</span></div></div>)}
                    </ul>
                </div>
                {/* Contact */}
                <div className="contact">
                    <h3>Need assistance? Feel free to contact me for any help or inquiries!</h3>
                    <ul className='bullet-list'>
                        <li>Phone: <a href={`tel:${'0030' + 6943120920}`} rel="noreferrer">{'0030' + 6943120920}</a></li>
                        <li>E-mail: <a href="mailto:example@example.com" rel="noreferrer">marmaraki.apartment@gmail.com</a></li>
                    </ul>
                </div>
                <ScrollToTop />
            </div>

        </>
    )
};

export default Help;