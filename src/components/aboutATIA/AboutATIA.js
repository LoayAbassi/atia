import React from 'react';
import './AboutATIA.css';
import img1 from './images/1.jpeg';
import img2 from './images/2.png';

const AboutATIA = () => {
    return (
        <div>
            <section className="aboutATIA">
                <h1 className="title">C&apos;est Quoi l&apos;ATIA</h1>
                <p className='subtitle'>
                L&apos;Association Tunisienne pour l&apos;Intelligence Artificielle, ATIA, est une association à but non
                lucratif fondée en 2005 par Prof. Khaled GHEDIRA.
                </p>
            </section>

            {/* Bref Section */}
            <section className='container'>
                <div className="section">
                    <div className="text">
                        <h2 className="section-title">Bref, L&apos;ATIA</h2>
                        <p className='pg'>Elle est issue des deux premières structures de recherche dans le domaine de l&apos;Intelligence
                            Artificielle (IA) en Tunisie qui ont été également fondées par Prof. Khaled GHEDIRA à savoir : l&apos;unité
                            de recherche URIASIS (IA et Systèmes d&apos;Informations) devenue par la suite le laboratoire de recherche
                            SOIE pour Stratégies d&apos;Optimisation et Informatique intelligentE comprenant plus d&apos;une centaine de
                            chercheurs universitaires spécialistes en IA.</p>
                    </div>
                        <div className='card-container'>
                            <div className="corner-box top-left"></div>
                            <div className="corner-box top-right"></div>
                            <div className="corner-box bottom-left"></div>
                            <div className="corner-box bottom-right"></div>
                            <div className="corner-box bottom"></div>
                            <div className="corner-box top"></div>


                            <div className="card-header">
                                <img src={img1} alt="Profile" className="profile-image" />
                                <h2 className="name">Pr. Khaled Ghédira</h2>
                                <h3 className="title1">Fondateur de l'ATIA </h3>
                                <h3 className="honorary">Président d'honneur</h3>
                            </div>
                        </div>
                        
                        
                            
                </div>

                <div className="section reverse">
                    <div className="text">
                        <h2 className="section-title">Le Rôle de <span>l&apos;association</span></h2>
                        <p className='pg'> Depuis sa création, l&apos;ATIA a contribué à la soutenance de plus de 300 thèses de doctorat et publié
                            environ 1500 articles scientifiques dans divers ouvrages, conférences, et revues. Elle a aussi organisé une
                            cinquantaine de conférences, workshops, écoles de formation et rencontres thématiques autour de l&apos;IA et
                            ce, aux échelles nationale et internationale.</p>
                    </div>
                    <div className="two-cards">
                        <div className='card bg to-top'>
                            <span className='nb'>
                                300
                            </span>
                            <span className='card-text'>
                                Thèses de doctorat
                            </span>
                        </div>
                        <div className='card to-bottom'>
                            <span className='nb'>
                                1500
                            </span>
                            <span className='card-text'>
                                Articles Scientifiques 
                            </span>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="text">
                        <h2 className="section-title">L&apos;IA <span>et l&apos;association</span></h2>
                        <p className='pg'>Outre l&apos;aspect formation par et pour la recherche, l&apos;ATIA se veut toujours être au diapason des avancées 
                            scientifiques de l&apos;IA et des technologies émergentes y afférentes pour répondre et fournir des solutions 
                            efficaces et ce, en temps réel et opportun aux exigences socio-économiques et géopolitiques tant du point de 
                            vue aide à la prise de décision humaine que de celui de l&apos;éthique.</p>
                    </div>
                    <div className='card-container'>
                            <div className="corner-box top-left"></div>
                            <div className="corner-box top-right"></div>
                            <div className="corner-box bottom-left"></div>
                            <div className="corner-box bottom-right"></div>
                            <div className="corner-box bottom"></div>
                            <div className="corner-box top"></div>


                            <div className="card-header">
                                <img src={img2} alt="Profile" className="profile-image2" />
                                </div>
                        </div>
                </div>

            </section>
        </div>
        
    )
}
export default AboutATIA;