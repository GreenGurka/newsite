import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../component/Hamburger';
const welcome = () => {
  return (
    <Fragment>
      <Hamburger />
      <header className='showcase'>
        <div className='container showcase-inner'>
          <h1>Välkommen!</h1>
          <p>
            Här hittar ni min webdev Portfölj, Kontaktuppgifter och Cv! Jag är
            just nu på jakt efter en anställning som Frontend developer. Kicka
            vidare för att få reda på mer.
          </p>
          <Link to='/Home' className='btn'>
            Home
          </Link>
        </div>
      </header>
    </Fragment>
  );
};

export default welcome;
