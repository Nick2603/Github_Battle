import React from 'react';
import * as styles from './Battle.module.css';
import { NavLink } from 'react-router-dom';

const Battle = () => {
  return (
    <div className={styles.navigation}>
      <h1>Battle</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem itaque
        ex distinctio voluptate possimus delectus unde similique soluta? Officia
        reiciendis iure aspernatur quia doloremque molestias ea debitis ratione
        recusandae blanditiis!
      </p>
      <div>
        <NavLink to='/'> Go to the Home page</NavLink>
      </div>
      <div>
        <NavLink to='/popular'> Go to the Popular page</NavLink>
      </div>
    </div>
  );
};

export default Battle;
