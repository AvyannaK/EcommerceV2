import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import pot1Image from './img/pot1.png';
import pot2Image from './img/pot2.png';
import pot3Image from './img/pot3.png';
import pot4Image from './img/pot4.png';
import Slideshow from './Slideshow';

const Home = () => {
  return (
    <div>
      <div className="background"></div>
      <div className="videos">
        <section className="video">
          <h1 className="maintext"></h1>
          <video autoPlay id="vid" loop muted>
            <source src={require('./img/V.mp4')} type="video/mp4" />
          </video>
        </section>
      </div>

      <div>
        <h2 className="title">FEATURED</h2>
      </div>
      <Slideshow />

      <div
        style={{
          backgroundImage: `url(/Second.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#040c1161',
          padding: '2px',
        }}
        className="hero"
      >
        <div className="row">
          <div className="hero-info">
            <a href="/shop" className="btn">
              Explore Now
            </a>
          </div>
        </div>
      </div>

      <section className="latest-products">
        <h2 className="title">NEW ARRIVALS</h2>
        <div className="medium-container">
          <div className="row">
            <div className="col-4">
              <a href="/shop">
                <img src={pot1Image} alt="Pot 1" />
                <h4>Nome Planter</h4>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </a>
            </div>
            <div className="col-4">
              <a href="/shop">
                <img src={pot2Image} alt="Pot 2" />
                <h4>Glanco Planter</h4>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half"></i>
                </div>
              </a>
            </div>
            <div className="col-4">
              <a href="/shop">
                <img src={pot3Image} alt="Pot 3" />
                <h4>Wasbi Planter</h4>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </a>
            </div>
            <div className="col-4">
              <a href="/shop">
                <img src={pot4Image} alt="Pot 4" />
                <h4>Slant Planter</h4>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
