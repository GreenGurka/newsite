import React, { Fragment } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Form from './Form';

const Contact = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='wrapper'>
        <div className='contactWrap'>
          <div className='contactText'>
            <section>
              <h1>Kontakt</h1>
              <p className='paragrafContact'>
                om ni önskar ta kontakt så kan ni göra det via ett meddelande
                nedan, eller via
                <a
                  href='https://www.linkedin.com/in/johan-smeij-b80867195' //eslint-disable-next-line
                  target='_blank'
                >
                  <button className='contactButton'> Linkedin</button>
                </a>
                och
                <a
                  href='https://www.instagram.com/smeijen/' //eslint-disable-next-line
                  target='_blank'
                >
                  <button className='contactButton'>Instagram</button>
                </a>
                eller länkarna längst ner på sidan.
              </p>
            </section>
          </div>

          <Form />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Contact;
