import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Architectuur',
    Svg: require('@site/static/img/architecture.svg').default,
    description: (
      <>
        Hier vind je de architectuur van de RV Waarloos.
      </>
    ),
  },
  {
    title: 'Handleidingen',
    Svg: require('@site/static/img/handleiding.svg').default,
    description: (
      <>
        Hier vind je de handleidingen van de RV Waarloos.
      </>
    ),
  },
  {
    title: 'Discussie',
    Svg: require('@site/static/img/discussion.svg').default,
    description: (
      <>
        Thema's van de werkgroep RV Waarloos Site.
      </>
    ),
  }
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
