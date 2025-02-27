import React from 'react';
import './Part.css';

const Part = () => {
    return (
        <section>
            <h2>Nos partenaires</h2>
            <div className='img-items'>
                <img src="/images/garage.png" alt="garage logo" width='180px' height='36.19px'/>
                <img src='./images/2.png' alt='factory logo' width="182.25px" height='40px'/>
                <img src='./images/3.png' alt='Manouba university logo' width="153.81px" height='57.79px'/>
                <img src='./images/4.jpeg' alt='CCFT logo' width="140px" height='32.6px'/>
                <img src='./images/5.png' alt='GIZ logo' width="160px" height='41.6px'/>
            </div>
        </section>
    )
}
export default Part;