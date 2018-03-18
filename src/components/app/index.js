import React from 'react';
import styles from './style.scss';
import Lorem from './../lorem';

import pkg from './../../../package.json';

export class App extends React.Component {
  render() {
    const name = this.props.name || pkg.name;

    return (
      <section>
        <h1 className={styles.title}>Hello, {name}</h1>
        <article className={styles.content}>
          <Lorem url={pkg.homepage} />
        </article>
      </section>
    );
  }
}