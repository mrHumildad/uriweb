import {useMemo} from 'react';
import './char.css';
import logo from '../assets/logo_yellow.png';
import { useNavigate } from "react-router-dom";
import headPic1 from '../assets/header/magicus1.png';
import headPic2 from '../assets/header/magicus2.png';
// Import images explicitly

import SwiperComponent from './Swiper';
const Magicus = () => {
  const images = useMemo(() => {
      const modules = import.meta.glob("../assets/magicus/*.{png,jpg}", { eager: true });
      // Convert to an array of URLs and sort alphabetically
      return Object.keys(modules)
        .sort()
        .map((key) => modules[key].default);
    }, []);
  const navigate = useNavigate();
  return (
    <div className='char-page' id='magicus-page'>
      <div className="char-header" id ="magicus-header">
        <img src={logo} alt="Mon Circ" className="char-logo" onClick={()=>navigate('/')}/>
        <h1 id="magicus-title" className="char-title">MON MÀGIA</h1>
        {/* <img className="char-img-left" src={headPic2} alt="" /> */}
        <img className="char-img-right" src={headPic1} alt="" />
      </div>
      <h3 className="char-subtitle">
        Trucs que no surten, trucs que surten al revés i trucs que, de vegades, sí que surten…
      </h3>
      <div className="char-main">
        <div className="char-fotos desktop">
          <SwiperComponent pics={images} />
        </div>
        <div className="char-info">
          <p className="char-text">
            Quan res passa com estava previst, la màgia es converteix en un joc inesperat on la sorpresa i les rialles són les autèntiques protagonistes.
          </p>
          <p className="char-text">
            Aquest espectacle de màgia còmica i visual transforma els errors en moments únics, plens d’humor i complicitat amb el públic. Cada situació, per més absurda que sembli, esdevé una oportunitat per sorprendre i fer riure grans i petits.
          </p>
          <div className="char-fotos mobile">
            <SwiperComponent pics={images}/>
          </div>
          <p className="char-text">
            Nens, nenes i adults s’endinsen en la història i en formen part activa, fent que cada funció sigui diferent i irrepetible.
          </p>
          <p className="char-text">
            Nens, nenes i adults s’endinsen en la història i en formen part activa, fent que cada funció sigui diferent i irrepetible.
          </p>
          <p className="char-text">
            Amb un format proper, fresc i divertit, és una proposta ideal per a biblioteques, escoles, festes escolars i activitats familiars. Una experiència plena de rialles, il·lusió i records inesborrables per a tothom.
          </p>
        </div>
      </div>
      <div className="video-wrapper">
  <iframe
    src="https://www.youtube.com/embed/Sf-bqgnyG_0?si=wBxXTbMDiCBGL4kd"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>

    <div className="data-char">
      <span className="data-block"><span className="data-key">Durada: </span><span className="data-value">40/50 minuts</span></span>
      <span className="data-block"><span className="data-key">Públic: </span><span className="data-value">Familiar</span></span>
      <span className="data-block"><span className="data-key">Espai: </span><span className="data-value">Interior / exterior</span></span>
      <span className="data-block"><span className="data-key">Idioma: </span><span className="data-value">Multilingüe / Gestual</span></span>
    </div>

    </div>
  );
};

export default Magicus;

