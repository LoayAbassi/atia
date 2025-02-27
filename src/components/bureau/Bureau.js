import React from 'react';
import './Bureau.css';
import { CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react';

// Data for the 10 cards
const bureauMembers = [
  { image: '/images/11.jpeg', title: 'Pr. Khaled Ghédira', text: "Fondateur de L'ATIA - Président d'honneur" },
  { image: '/images/22.jpeg', title: 'Dr. Farah BARIKA KTATA', text: 'Présidente ATIA- Maître Assistante ISSAT Sousse' },
  { image: '/images/33.jpeg', title: 'Dr. Olfa Belkahla Driss', text: "Responsable de la relation avec l'environnement académique - Maître de Conférences - ESC" },
  { image: '/images/44.jpeg', title: 'Dr. Fatma SIALA KALLEL', text: 'Responsable communication - Maître assistante ISAMM' },
  { image: '/images/55.png', title: 'Pr. Najiba Bellaaj', text: 'Vice présidente - Professeur ISI' },
  { image: '/images/66.png', title: 'Dr. Bilel Marzouki', text: 'Responsable adhésion - Maître assistant ENSI' },
  { image: '/images/77.png', title: 'Dr. Chaker Essid', text: 'Trésorier - Maître assistant FST' },
  { image: '/images/88.png', title: 'Dr. Amel Labidi', text: 'Sécrétaire Général Adjoint - Consultant BH' },
  { image: '/images/99.png', title: 'Radhwane B.Rhouma', text: 'Consultant PRICE - Responsable des activités internes' },
  { image: '/images/10.png', title: 'Dr. Houssem Nouri', text: 'Responsable de la planification - Maître assistant FSEG' }
];

const Bureau = () => {
  return (
    <div>
      <section className='title'>
        <h2>Bureau Exécutif</h2>
        <p>Les Responsables de L&apos;ATIA</p>
      </section>
      <section className="cards-container">
        {bureauMembers.map((member, index) => (
          <CCard key={index} className={`custom-card ${index >= 8 ? 'last-row' : ''}`}>
            <CCardImage orientation="top" src={member.image} />
            <CCardBody>
              <CCardTitle>{member.title}</CCardTitle>
              <CCardText>{member.text}</CCardText>
            </CCardBody>
          </CCard>
        ))}
      </section>
    </div>
  );
};

export default Bureau;
