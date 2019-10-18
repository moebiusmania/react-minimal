import React from 'react';
import styles from './style.scss';
import Lorem from './../lorem';

import pkg from './../../../package.json';

export const App = (props) => {
  const name = props.name || pkg.name;

  return (
    <section>
      <h1 className={styles.title}>Hello, {name}</h1>
      <article className={styles.content}>
        <Lorem url={pkg.homepage} />
      </article>
    </section>
  );
}