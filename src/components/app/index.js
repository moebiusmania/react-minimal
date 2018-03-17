import React from 'react';
import styles from './style.scss';
import Lorem from './../lorem';

export class App extends React.Component {
  render() {
    const name = this.props.name || 'React Minimal';

    return (
      <section>
        <h1 className={styles.title}>Hello, {name}</h1>
        <article className={styles.content}>
          <Lorem />
        </article>
      </section>
    );
  }
}