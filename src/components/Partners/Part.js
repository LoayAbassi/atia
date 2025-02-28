import React from 'react';
import './Part.css';
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";


const Part = () => {
    return (
        <section>
            <h2>Nos partenaires</h2>
            <div className='img-items'>
                <img src={img1} alt="garage logo" width='180px' height='36.19px'/>
                <img src={img2} alt='factory logo' width="182.25px" height='40px'/>
                <img src={img3} alt='Manouba university logo' width="153.81px" height='57.79px'/>
                <img src={img4} alt='CCFT logo' width="140px" height='32.6px'/>
                <img src={img5} alt='GIZ logo' width="160px" height='41.6px'/>
            </div>
        </section>
    )
}
export default Part;