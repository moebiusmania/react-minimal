import React, { FunctionComponent } from 'react';
import styles from './style.module.scss';
import { Lorem } from '../lorem';

import pkg from './../../../package.json';

interface Props {
  name?: string
}

export const App: FunctionComponent<Props>  = (props: Props) => {
  const name: string = props.name || pkg.name;

  return (
    <section>
      <h1 className={styles.title}>Hello, {name}</h1>
      <article className={styles.content}>
        <Lorem url={pkg.homepage} />
      </article>
    </section>
  );
}