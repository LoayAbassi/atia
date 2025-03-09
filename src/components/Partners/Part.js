import React from 'react';
import './Part.css';
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";


const Part = () => {
    return (

        <section id='part'>
            <h2>Nos partenaires</h2>
            <div className='img-items'>
                <img src={img1} alt="garage logo" />
                <img src={img2} alt='factory logo' />
                <img src={img3} alt='Manouba university logo' />
                <img src={img4} alt='CCFT logo' />
                <img src={img5} alt='GIZ logo'/>
            </div>
        </section>
    )
}
export default Part;