import React, { Fragment } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='wrapper'>
        <div className='wrapper-home'>
          <div className='homeshowcase'>
            <h1>Hej framtida arbetsgivare!</h1>
            <h4>
              Min ambition är att bli en bättre och bättre Frontend developer
              för varje dag som går. Med en större framtida ambiton om Fullstack
              developer. Mitt mål just nu är att landa mitt första jobb inom
              Frontend, och fortsätta öka min kunskap inom yrket!
            </h4>
            <br />
            <h4>
              Efter att ha växt upp i Stockholm bor jag nu i en by vid namn
              Bullmark, Umeå kommun. Jag skulle säga att mina positiva sidor är
              att jag är lugn, lätt att ha att göra med och ser till att lösa
              mina uppgifter till det bästa som går under rådande
              omständigheter, alltid.
            </h4>
            <br />
            <h3>
              <a
                href='https://github.com/GreenGurka/MySiteProject'
                //eslint-disable-next-line
                target='_blank'
              >
                <button className='contactButton'> Github</button>
              </a>
              Klicka här för att komma till den här sidans Github!
            </h3>
          </div>
          <div className='home-box-1'></div>
          <div className='home-box-2'>
            <h3>Kunskaper</h3>
            <p>
              Mina programmerings kunskaper är inom: <br />
              <strong>
                REACT, JavaScript, CSS3, HTML5, SASS, Git, Github.
              </strong>
              <br />
              <br /> <br />
              Har även byggt med Css-frameworks som Bulma och Bootstrap.
            </p>
            <br />
            <br />
            Samt gjort projekt med MERN stack: <br />
            <strong>MongoDB, Express, React och Node.js</strong>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
