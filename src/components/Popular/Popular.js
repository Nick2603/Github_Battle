import React from 'react';
import * as styles from './Popular.module.css';
import { NavLink } from 'react-router-dom';

const Popular = () => {
  return (
    <div className={styles.navigation}>
      <h1>Popular</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
        animi incidunt cum, voluptate hic adipisci nostrum quod qui sunt neque
        ipsum? Optio nobis sit quis, necessitatibus in facilis est? Laboriosam.
      </p>
      <div>
        <NavLink to='/'> Go to the Home page</NavLink>
      </div>
      <div>
        <NavLink to='/battle'> Go to the Battle page</NavLink>
      </div>
    </div>
  );
};

export default Popular;
