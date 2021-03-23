import {FunctionComponent} from 'react';
import VizartecLogo from '../img/vizartec-logo-with-text.svg'

export const VizartecFooter: FunctionComponent = () => {
  return <footer className="vzt-footer" id="vzt-footer">
    <img className="vzt-logo" src={VizartecLogo} alt="VIZARTEC" />
    <p className="vzt-tagline">We design and develop compelling <strong>custom websites.</strong></p>
  </footer>
}
