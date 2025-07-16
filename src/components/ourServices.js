// components/Services.js
import React from 'react';
import styles from './style/ourServices.css';

const services = [
  {
    title: 'Web Development',
    description: 'Build responsive, fast, and scalable websites using modern frameworks like React, Next.js, and Tailwind CSS. From landing pages to complex web apps, we deliver pixel-perfect solutions.',
    icon: '🌐',
  },
  {
    title: 'Mobile App Development',
    description: 'Create seamless mobile experiences for iOS and Android using React Native and Flutter. We focus on performance, usability, and beautiful interfaces to engage your users.',
    icon: '📱',
  },
  {
    title: 'AI / Machine Learning',
    description: 'Leverage AI to automate tasks, gain insights, and build intelligent products. We offer custom ML models, data analysis, and integration with cloud AI services.',
    icon: '🤖',
  },
];

export default function Services() {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.heading}>Our Services</h2>
      <div className={styles.cardsContainer}>
        {services.map((service, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}