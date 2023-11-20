import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Bienvenido al Open Lab de Radio Definida por Software (SDR).',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        En este espacio, exploraremos la Radio Definida por Software, 
        una tecnología que reemplaza la funcionalidad tradicional de los componentes de hardware de radio con software.
      </>
    ),
  },
  {
    title: 'Explorando las Capacidades de SDR.',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Te invitamos a explorar las vastas posibilidades que ofrece la Radio Definida por Software (SDR).
        Desde la capacidad de reconfiguración en tiempo real hasta la capacidad de procesar una amplia gama de frecuencias
      </>
    ),
  },
  {
    title: 'Descubre el Futuro de las Comunicaciones:',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Desde la experimentación práctica hasta la comprensión profunda de las tecnologías emergentes, 
        nuestra plataforma te guiará a través de las maravillas de la SDR.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
