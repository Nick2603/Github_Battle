import React from 'react';
import * as styles from './Home.module.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.navigation}>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ut. Quo
        consequuntur tenetur cupiditate dolore beatae. Deserunt eligendi
        repellendus enim? Magni veritatis totam aut, ipsa hic eveniet dolore
        facere deserunt.
      </p>
      <div>
        <NavLink to='/battle'> Go to the Battle page</NavLink>
      </div>
      <div>
        <NavLink to='/popular'> Go to the Popular page</NavLink>
      </div>
    </div>
  );
};

export default Home;
