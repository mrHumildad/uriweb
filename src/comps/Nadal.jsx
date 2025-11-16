import {useMemo} from 'react';
import './char.css';
import logo from '../assets/logo_yellow.png';
import { useNavigate } from "react-router-dom";
import headPic1 from '../assets/header/nadal.png';
import cabalgadaPic from '../assets/nadal/aldino.png'
//import headPic2 from '../assets/header/nadal2.png';
// Import images explicitly

import SwiperComponent from './Swiper';
const Nadal = () => {
  const images = useMemo(() => {
      const modules = import.meta.glob("../assets/nadal/*.{png,jpg}", { eager: true });
      // Convert to an array of URLs and sort alphabetically
      return Object.keys(modules)
        .sort()
        .map((key) => modules[key].default);
    }, []);
  const navigate = useNavigate();
  return (
    <div className='char-page' id='nadal-page'>
      <div className="char-header" id ="nadal-header">
        <img src={logo} alt="Mon Circ" className="char-logo" onClick={()=>navigate('/')}/>
        <h1 id="nadal-title" className="char-title">QUIN NADAL!</h1>
        {/* <img className="char-img-left" src={headPic2} alt="" /> */}
        <img className="char-img-right" src={headPic1} alt="" />
      </div>
      <h3 className="char-subtitle">
        Espectacles i activitats per fer brillar l’hivern
      </h3>
      <div className="char-main">
        <div className="char-fotos desktop">
          <SwiperComponent pics={images}/>
        </div>
        <div className="char-info">
          <p className="char-text">
            Quan arriba el fred i els llums de Nadal, Mon Circ es transforma per portar màgia, humor i alegria a tots els racons. Spagueti es reinventa amb un toc festiu ple de tendresa, mentre que els personatges itinerants —absurds, poètics i sorprenents— apareixen entre parades, mercats i carrers il·luminats, convertint qualsevol espai en un escenari viu i vibrant.
          </p>
          <div className="char-fotos mobile">
            <SwiperComponent pics={images}/>
          </div>
          <p className="char-text">
            Els personatges itinerants es poden combinar en pack amb un espectacle de màgia còmica o amb el mateix Super Spagueti, creant una experiència completa que uneix circ familiar, màgia nadalenca i humor per a tots els públics.
          </p>
          <p className="char-text">
            Per sumar-hi encara més encant, el Pare Noel pot fer una visita especial als nens i nenes, tant la nit com el dia de Nadal, portant il·lusió, proximitat i un toc de màgia inoblidable.
          </p>
        </div>
      </div>
      <h3 className="char-subtitle">
        Espectacles i activitats per fer brillar l’hivern
      </h3>
      <div className="char-main">
        <div className="char-info">
          <p className="char-text">
            Per a cavalcades i cercaviles nadalenques, Mon Circ ofereix també l’espectacle itinerant Mil i una Nit, amb menjafocs, xanques i una sorprenent catifa voladora: una proposta visual i festiva que omple els carrers de color, fantasia i diversió compartida.
          </p>
          <div className="char-fotos mobile">
          <SwiperComponent pics={[cabalgadaPic, cabalgadaPic, cabalgadaPic]}/>
          </div>
          <p className="char-text">
            A l’hivern, cada espai es converteix en escenari: fires, carrers, biblioteques i escoles s’omplen de poesia, rialles i esperit festiu. Una proposta ideal per compartir il·lusió i fer delNadal un moment absolutament inoblidable.
          </p>
        </div>
        <div className="char-fotos desktop">
          <SwiperComponent pics={[cabalgadaPic, cabalgadaPic, cabalgadaPic]}/>
        </div>
        
      </div>

    {/* <div className="data-char">
      <span className="data-block"><span className="data-key">Durada: </span><span className="data-value">40/50 minuts</span></span>
      <span className="data-block"><span className="data-key">Públic: </span><span className="data-value">Familiar</span></span>
      <span className="data-block"><span className="data-key">Espai: </span><span className="data-value">Interior / exterior</span></span>
      <span className="data-block"><span className="data-key">Idioma: </span><span className="data-value">Multilingüe / Gestual</span></span>
      <img src={logo} alt="Mon Circ" className="char-logo" onClick={()=>navigate('/')}/>
    </div> */}

    </div>
  );
};

export default Nadal;


