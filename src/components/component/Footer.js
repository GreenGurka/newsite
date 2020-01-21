import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Footer = ({ icon4, icon5, icon6 }) => {
  return (
    <Fragment>
      <div className='footer-wrap'>
        <div className='footer'>
          <h4> Site by Johan Smeij version 1.0.0</h4>
          <ul>
            <li>
              <a
                href='https://www.linkedin.com/in/johan-smeij-b80867195' //eslint-disable-next-line
                target='_blank'
              >
                <i className={icon4} />
              </a>
            </li>

            <li>
              <a
                href='https://github.com/GreenGurka/MySiteProject' //eslint-disable-next-line
                target='_blank'
              >
                <i className={icon5} />
              </a>
            </li>

            <li>
              <a
                href='https://www.instagram.com/smeijen/' //eslint-disable-next-line
                target='_blank'
              >
                <i className={icon6} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

Footer.propTypes = {
  icon: PropTypes.string
};

Footer.defaultProps = {
  icon4: 'fab fa-linkedin fa-2x',
  icon5: ' fab fa-github-square fa-2x',
  icon6: ' fab fa-instagram fa-2x'
};

export default Footer;
