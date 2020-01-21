import React, { Fragment } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Portfolio = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='wrapper'>
        <div className='portfolioWrap'>
          <div className='portfolioCard'>
            <h3>Project one</h3>
            <p>in progress, coming soon.</p>
          </div>
          <div className='portfolioCard'>
            <h3>Project two</h3>
            <p>in planning..</p>
          </div>

          <div className='portfolioCard'>
            <h3>Project three</h3>
            <p>in my dreams...</p>
          </div>
        </div>
        <div className='portfolioWrap2'>
          <div className='CV'>
            <h1>CV</h1>
            <p>
              Saneringsbolaget norr/Swoosh sanering. Maj 2019-November 2019.
            </p>

            <p>
              {' '}
              ISKAD som Saneringstekninker först via Military Work och sedan som
              tillsvidare anställd mellan Februari 2018 till 18 April 2019.
            </p>

            <p>
              {' '}
              GSS/K som spaningssoldat vid 131 Säkskvadron, Livgardet. från Juli
              2017 till Februari 2018.
            </p>

            <p>
              {' '}
              Lager- och kapansvarig på Holmquist metall och gravyr (Holmquist
              sign). Från Februari 2014 till juni 2016.
            </p>

            <p>
              Scania Teamleader och materialhantering, Scania, mellan maj 2011 –
              februari 2014.
            </p>

            <p>
              {' '}
              Karateinstruktör (Kimura Shukokai Sweden). Var huvudtränare och
              ordförande för klubben i Salem 2013-2015. Aktiv under åren
              1999-2015.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Portfolio;
