import react from "react";
import devfolio from '../../public/images/sponsors/devfolio.png'
import gfg from '../../public/images/sponsors/gfg.png'
import celo from '../../public/images/sponsors/celo.png'

function Sponsers() {
  return (
    <div className="sponsers">

      <div className="sponsers-heading">SPONSERS</div>

      <div className="diamond__sponsers">
        <div className="diamond__sponsers-heading">
          <span>Diamond Sponsers</span>
        </div>
        <div className="diamond__sponsers-sponsers">
          <div className="diamond__sponsers-sponsers-box"><img src={devfolio.src}/></div>
          <div className="diamond__sponsers-sponsers-box"><img src={gfg.src}/></div>
        </div>
      </div>
   
      <div className="gold__sponsers">
        <div className="gold__sponsers-heading">
          <span>Gold Sponsers</span>
        </div>
        <div className="gold__sponsers-sponsers">
          <div className="gold__sponsers-sponsers-box"><img src={devfolio.src}/></div>
          <div className="gold__sponsers-sponsers-box"><img src={gfg.src}/></div>
          <div className="gold__sponsers-sponsers-box"><img src={devfolio.src}/></div>
          <div className="gold__sponsers-sponsers-box"><img src={gfg.src}/></div>
          <div className="gold__sponsers-sponsers-box"><img src={devfolio.src}/></div>
          <div className="gold__sponsers-sponsers-box"><img src={gfg.src}/></div>
        </div>
      </div>

      <div className="silver__sponsers">
        <div className="silver__sponsers-heading">
          <span>Siver Sponsers</span>
        </div>
        <div className="silver__sponsers-sponsers">
          <div className="silver__sponsers-sponsers-box"><img src={devfolio.src}/></div>
          <div className="silver__sponsers-sponsers-box"><img src={gfg.src}/></div>
          <div className="silver__sponsers-sponsers-box"><img src={celo.src}/></div>
          <div className="silver__sponsers-sponsers-box"><img src={celo.src}/></div>
          <div className="silver__sponsers-sponsers-box"><img src={devfolio.src}/></div>
          <div className="silver__sponsers-sponsers-box"><img src={celo.src}/></div>
        </div>
      </div>

      <div className="bronze__sponsers">
        <div className="bronze__sponsers-heading">
          <span>Bronze Sponsers</span>
        </div>
        <div className="bronze__sponsers-sponsers">
          <div className="bronze__sponsers-sponsers-box"><img src={celo.src}/></div>
          <div className="bronze__sponsers-sponsers-box"><img src={celo.src}/></div>
          <div className="bronze__sponsers-sponsers-box"><img src={celo.src}/></div>
          <div className="bronze__sponsers-sponsers-box"><img src={celo.src}/></div>
          <div className="bronze__sponsers-sponsers-box"><img src={celo.src}/></div>
          <div className="bronze__sponsers-sponsers-box"><img src={celo.src}/></div>
          <div className="bronze__sponsers-sponsers-box"><img src={celo.src}/></div>
          <div className="bronze__sponsers-sponsers-box"><img src={celo.src}/></div>
          <div className="bronze__sponsers-sponsers-box"><img src={celo.src}/></div>
          <div className="bronze__sponsers-sponsers-box"><img src={celo.src}/></div>
        </div>
      </div>

    </div>
  );
}

export default Sponsers;
