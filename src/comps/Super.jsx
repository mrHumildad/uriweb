import React from 'react';
import './char.css';
import logo from '../assets/logo_yellow.png';
import headPic1 from '../assets/header/super1.png';
import headPic2 from '../assets/header/super2.png';
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

import SwiperComponent from './Swiper';
const Super = () => {
  const images = useMemo(() => {
    const modules = import.meta.glob("../assets/super/*.{png,jpg}", { eager: true });
    // Convert to an array of URLs and sort alphabetically
    return Object.keys(modules)
      .sort()
      .map((key) => modules[key].default);
  }, []);
  const navigate = useNavigate();
  return (
    <div className='char-page' id='super-page'>
      <div id="super-header" className="char-header ">
        <img src={logo} alt="Mon Circ" className="char-logo" onClick={()=>navigate('/')}/>
        <h1 id="super-title" className="char-title">SUPER SPAGUETI</h1>
        {/* <img className="char-img-left" src={headPic2} alt="" /> */}
        <img className="char-img-right" src={headPic2} alt="" />
      </div>
      <h3 className="char-subtitle">
        El superheroi del circ… més inesperat de tots... Què passaria si un pallasso es convertís en superheroi?
      </h3>
      <div className="char-main">
        <div className="char-fotos desktop">
          <SwiperComponent pics={images}/>
        </div>
        <div className="char-info">
          <p className="char-text">
            Super Spagueti és un espectacle d’energia explosiva on el circ familiar es fusiona amb l’humor absurd per donar vida a un personatge tan sorprenent com entranyable. Malabars impossibles, situacions còmiques i una interacció constant amb el públic converteixen cada funció en una experiència única i inoblidable.
          </p>
          <div className="char-fotos mobile">
          <SwiperComponent pics={images}/>
          </div>
          <p className="char-text">
            El protagonista és un superheroi molt particular: res no li surt com voldria, però la seva creativitat, el seu esperit juganer i la seva capacitat de riure’s de si mateix el transformen en un heroi proper i divertidíssim. El públic —grans i petits— es converteix en còmplice i part essencial de la funció, participant activament en cada moment.
          </p>
          <p className="char-text">
            Un espectacle fresc, visual i participatiu, ideal per a programacions familiars, escoles, festes populars i espais oberts. Diversió garantida, emoció i molta màgia en un format pensat per deixar un record inesborrable.
          </p>
        </div>
      </div>

    <div className="data-char">
      <span className="data-block"><span className="data-key">Durada: </span><span className="data-value">50 minuts</span></span>
      <span className="data-block"><span className="data-key">Públic: </span><span className="data-value">Familiar</span></span>
      <span className="data-block"><span className="data-key">Espai: </span><span className="data-value">Interior / exterior</span></span>
      <span className="data-block"><span className="data-key">Idioma: </span><span className="data-value">Multilingüe / Gestual</span></span>
    </div>

    </div>
  );
};

export default Super;

