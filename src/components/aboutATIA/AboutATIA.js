import React from 'react';
import './AboutATIA.css';

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
                        <h2 className="section-title">Bref,L&apos;ATIA</h2>
                        <p>Elle est issue des deux premières structures de recherche dans le domaine de l&apos;Intelligence
                            Artificielle (IA) en Tunisie qui ont été également fondées par Prof. Khaled GHEDIRA à savoir : l&apos;unité
                            de recherche URIASIS (IA et Systèmes d&apos;Informations) devenue par la suite le laboratoire de recherche
                            SOIE pour Stratégies d&apos;Optimisation et Informatique intelligentE comprenant plus d&apos;une centaine de
                            chercheurs universitaires spécialistes en IA.</p>
                    </div>
                    <div className="image-box">
                        <img className="img1" src="/images/Frame 142.png" alt="Pr. Khaled Ghédira" />
                    </div>
                </div>

                <div className="section reverse">
                    <div className="text">
                        <h2 className="section-title">Le Rôle de <span>l&apos;association</span></h2>
                        <p>Depuis sa création, l&apos;ATIA a contribué à la soutenance de plus de 300 thèses de doctorat et publié
                            environ 1500 articles scientifiques dans divers ouvrages, conférences, et revues. Elle a aussi organisé une
                            cinquantaine de conférences, workshops, écoles de formation et rencontres thématiques autour de l&apos;IA et
                            ce, aux échelles nationale et internationale.</p>
                    </div>
                    <div className="image-box">
                        <img src="/images/stats.svg" alt="AI Icon" />
                    </div>
                </div>

                <div className="section">
                    <div className="text">
                        <h2 className="section-title">L&apos;IA <span>et l&apos;association</span></h2>
                        <p>Outre l&apos;aspect formation par et pour la recherche, l&apos;ATIA se veut toujours être au diapason des avancées 
                            scientifiques de l&apos;IA et des technologies émergentes y afférentes pour répondre et fournir des solutions 
                            efficaces et ce, en temps réel et opportun aux exigences socio-économiques et géopolitiques tant du point de 
                            vue aide à la prise de décision humaine que de celui de l&apos;éthique.</p>
                    </div>
                    <div className="image-box">
                        <img src="/images/Frame2.png" alt="AI Icon" />
                    </div>
                </div>

            </section>
        </div>
        
    )
}
export default AboutATIA;