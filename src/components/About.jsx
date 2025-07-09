import React, { useEffect, useState } from "react";
import styles from "./About.module.css";

const GITHUB_EVENTS_API = "https://api.github.com/users/donPain/events/public?per_page=100&page=1";
const GITHUB_PROFILE_API = "https://api.github.com/users/donPain";

function uniqueOrgs(events) {
  // Extrai organizações de eventos de contribuição (PullRequestReviewEvent, PushEvent, ForkEvent)
  const orgs = {};
  console.log(events);
  events.forEach(e => {
    // Pega todas as organizações de eventos relevantes, sem filtrar por ano
    
    if (e.org && e.org.login && e.org.avatar_url) {
      orgs[e.org.login] = {
        name: e.org.login,
        avatar: e.org.avatar_url,
        url: `https://github.com/${e.org.login}`
      };
    }
  });
  // Adiciona manualmente organizações importantes se não estiverem presentes
  const manualOrgs = [
    {
      name: 'apache/flink',
      avatar: 'https://flink.apache.org/img/logo/png/1000/flink_squirrel_1000.png',
      url: 'https://github.com/apache/flink'
    },
    {
      name: 'aws',
      avatar: 'https://avatars.githubusercontent.com/u/2232217?v=4',
      url: 'https://github.com/aws'
    },
    {
      name: 'solinftec',
      avatar: 'https://avatars.githubusercontent.com/u/22507032?s=200&v=4',
      url: 'https://github.com/solinftec'
    }
  ];
  manualOrgs.forEach(manual => {
    if (!orgs[manual.name]) {
      orgs[manual.name] = manual;
    }
  });
  return Object.values(orgs);
}

export default function About() {
  const [orgs, setOrgs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bio, setBio] = useState("");

  useEffect(() => {
    fetch(GITHUB_EVENTS_API)
      .then(res => res.json())
      .then(events => setOrgs(uniqueOrgs(events)))
      .finally(() => setLoading(false));
    fetch(GITHUB_PROFILE_API)
      .then(res => res.json())
      .then(profile => setBio(profile.bio || "Engenheiro de software apaixonado por backend, sistemas distribuídos e open source. Sempre buscando contribuir com a comunidade!"));
  }, []);

  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.aboutTitle}>Sobre</h2>
      <p className={styles.aboutDesc}>
        {bio}
      </p>
      <h3 className={styles.aboutSubtitle}>Contribuições Open Source</h3>
      {loading ? (
        <div className={styles.aboutLoading}>Carregando...</div>
      ) : orgs.length === 0 ? (
        <div className={styles.aboutEmpty}>Nenhuma contribuição encontrada em organizações desde 2021.</div>
      ) : (
        <ul className={styles.orgList}>
          {orgs.map(org => (
            <li key={org.name} className={styles.orgItem}>
              <a href={org.url} target="_blank" rel="noopener noreferrer" className={styles.orgLink}>
                <img src={org.avatar} alt={org.name} className={styles.orgLogo} />
                <span className={styles.orgName}>{org.name}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
