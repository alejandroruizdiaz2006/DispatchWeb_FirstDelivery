import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { teamZ, dispatchNetwork, villains } from '../../data/characters';
import CharacterCard from '../../components/character-card/CharacterCard';
import IncidentCard from '../../components/incident-card/IncidentCard';
import heroImage from '../../assets/hero/dispatch-hero.jpg';

import './Home.css';

function Home() {
  const { t } = useTranslation();
  
  const [incidents, setIncidents] = useState([]);
  const [filter, setFilter] = useState('Todos');

  useEffect(() => {
    const fetchIncidents = async () => {
      const querySnapshot = await getDocs(collection(db, "incidents"));
      const incidentsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setIncidents(incidentsData);
    };

    fetchIncidents();
  }, []);

  const filteredIncidents = filter === 'Todos' 
    ? incidents 
    : incidents.filter(incident => incident.status === filter);

  return (
    <section className="home-page">
      <div 
        className="home-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(2,6,23,0.7), rgba(2,6,23,0.9)), url(${heroImage})`
        }}
      >
        <h1>{t('homeTitle')}</h1>
        <p>{t('homeDescription')}</p>
      </div>

      <section className="home-section">
        <h2>Reportes de Incidentes</h2>
        <div className="filter-buttons">
          <button onClick={() => setFilter('Todos')} className={filter === 'Todos' ? 'active' : ''}>Todos</button>
          <button onClick={() => setFilter('Activa')} className={filter === 'Activa' ? 'active' : ''}>Activas</button>
          <button onClick={() => setFilter('Completada')} className={filter === 'Completada' ? 'active' : ''}>Completadas</button>
        </div>
        <div className="incidents-grid">
          {filteredIncidents.map(incident => (
            <IncidentCard 
              key={incident.id}
              title={incident.title}
              status={incident.status}
              description={incident.description}
            />
          ))}
        </div>
      </section>

      <div className="section-divider"></div>

      <section className="home-section">
        <h2>Equipo Z</h2>
        <div className="characters-grid">
          {teamZ.map(character => (
            <CharacterCard
              key={character.id}
              name={character.name}
              role={character.role}
              description={character.description}
              image={character.image}
            />
          ))}
        </div>
      </section>

      <div className="section-divider"></div>

      <section className="home-section">
        <h2>Integrantes del Superhero Dispatch Network</h2>
        <div className="characters-grid">
          {dispatchNetwork.map(character => (
            <CharacterCard
              key={character.id}
              name={character.name}
              role={character.role}
              description={character.description}
              image={character.image}
            />
          ))}
        </div>
      </section>

      <div className="section-divider"></div>

      <section className="home-section">
        <h2 className="villain-title">Villanos</h2>
        <div className="characters-grid">
          {villains.map(character => (
            <CharacterCard
              key={character.id}
              name={character.name}
              role={character.role}
              description={character.description}
              image={character.image}
            />
          ))}
        </div>
      </section>
    </section>
  );
}

export default Home;