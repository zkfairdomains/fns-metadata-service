import { Version } from "./base";
import { CANVAS_FONT_PATH }  from './config';
import { importFont } from "./utils/importFont";

const fontSatoshiBold = importFont(CANVAS_FONT_PATH, 'font/truetype'); 

interface SVGTemplateFields {
  backgroundImage?: string;
  domain: string;
  domainFontSize: number;
  isNormalized: boolean;
  isSubdomain: boolean;
  mimeType?: string;
  subdomainText?: string;
  version: Version;
}

export default function createSVGfromTemplate({
  backgroundImage,
  domain,
  domainFontSize,
  isNormalized = true,
  isSubdomain = false,
  mimeType,
  subdomainText,
  version,
}: SVGTemplateFields) {
  return `<svg width="270" height="270" viewBox="0 0 270 270" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${
      backgroundImage
        ? `<image href="data:${mimeType};base64,${backgroundImage}" width="270" height="270"/>
        <rect width="270" height="270" fill="#000" fill-opacity=".12"/>`
        : isNormalized
          ? `<rect width="270" height="270" fill="url(#paint0_linear)"/>`
          : `<rect width="270" height="270" fill="url(#paint1_linear)"/>`
    }
    <defs>
      <filter id="dropShadow" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="270" width="270">
        <feDropShadow dx="0" dy="1" stdDeviation="2" flood-opacity="0.225" width="200%" height="200%"/>
      </filter>
    </defs>
    
    <path fill="#e13022" d="M 0 0 L 6.496094 0 L 6.496094 36.996094 L 0 36.996094 Z M 0 0 " fill-opacity="1" fill-rule="red"  filter="url(#dropShadow)" transform="translate(34.5,32.5)" />  
    <path fill="#e13022" d="M 30.535156 0 L 37.007812 0 L 37.007812 37.003906 L 30.535156 37.003906 Z M 30.535156 0 " fill-opacity="1" fill-rule="red" transform="translate(42.5,32.5)" />  
    <path fill="#e13022" d="M 0 0 L 13.875 0 L 13.875 6.46875 L 0 6.46875 Z M 0 0 "  fill-opacity="1" fill-rule="red"  filter="url(#dropShadow)" transform="translate(38.5,32.5)" />  
    <path fill="#e13022" d="M 23.128906 0 L 37.003906 0 L 37.003906 6.46875 L 23.128906 6.46875 Z M 23.128906 0 " fill-opacity="1" fill-rule="red"  filter="url(#dropShadow)" transform="translate(38.5,32.5)" />  
    <path fill="#e13022" d="M 0 30.535156 L 13.875 30.535156 L 13.875 37.007812 L 0 37.007812 Z M 0 30.535156 " fill-opacity="1" fill-rule="red"  filter="url(#dropShadow)" transform="translate(37.5,32.5)" />  
    <path fill="#e13022" d="M 23.128906 30.535156 L 37.003906 30.535156 L 37.003906 37.007812 L 23.128906 37.007812 Z M 23.128906 30.535156 " fill-opacity="1" fill-rule="red" transform="translate(38.5,32.5)" filter="url(#dropShadow)" /> 
     

    <g transform="translate(0 39.38461538461539)" style="transform:matrix(1, 0, 0, 1, 0, 39.3846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:1;animation-play-state:paused;animation-delay:-7.35409s" >Z</text></g>
<g transform="translate(0 59.07692307692308)" style="transform:matrix(1, 0, 0, 1, 0, 59.0769);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.9;animation-play-state:paused;animation-delay:-6.90161s" >K</text></g>
<g transform="translate(0 98.46153846153847)" style="transform:matrix(1, 0, 0, 1, 0, 98.4615);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.8;animation-play-state:paused;animation-delay:-5.99663s" >F</text></g>
<g transform="translate(0 118.15384615384616)" style="transform:matrix(1, 0, 0, 1, 0, 118.154);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.7;animation-play-state:paused;animation-delay:-5.54414s" >A</text></g>
<g transform="translate(0 1 37.84615384615387)" style="transform:matrix(1, 0, 0, 1, 0, 137.846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.6;animation-play-state:paused;animation-delay:-5.09165s" >I</text></g>
<g transform="translate(0 157.53846153846155)" style="transform:matrix(1, 0, 0, 1, 0, 157.538);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.5;animation-play-state:paused;animation-delay:-4.63916s" >R</text></g>
<g transform="translate(0 196.92307692307693)" style="transform:matrix(1, 0, 0, 1, 0, 196.923);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.4;animation-play-state:paused;animation-delay:-3.73418s" >a</text></g>
<g transform="translate(0 216.61538461538464)" style="transform:matrix(1, 0, 0, 1, 0, 216.615);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.2;animation-play-state:paused;animation-delay:-3.2817s" >Z</text></g>
<g transform="translate(0 236.30769230769232)" style="transform:matrix(1, 0, 0, 1, 0, 236.308);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-2.82921s" >K</text></g>


<g transform="translate(19.692307692307693 19.692307692307693)" style="transform:matrix(1, 0, 0, 1, 19.6923, 19.6923);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-10.4194s" >D</text></g>
<g transform="translate(19.692307692307693 39.38461538461539)" style="transform:matrix(1, 0, 0, 1, 19.6923, 39.3846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-9.96691s" >o</text></g>
<g transform="translate(19.692307692307693 59.07692307692308)" style="transform:matrix(1, 0, 0, 1, 19.6923, 59.0769);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-9.51442s" >m</text></g>
<g transform="translate(19.692307692307693 78.76923076923077)" style="transform:matrix(1, 0, 0, 1, 19.6923, 78.7692);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-9.06193s" >i</text></g>
<g transform="translate(19.692307692307693 98.46153846153847)" style="transform:matrix(1, 0, 0, 1, 19.6923, 98.4615);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.090988;animation-play-state:paused;animation-delay:-8.60944s" >n</text></g>
<g transform="translate(19.692307692307693 118.15384615384616)" style="transform:matrix(1, 0, 0, 1, 19.6923, 118.154);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.283296;animation-play-state:paused;animation-delay:-8.15695s" >s</text></g>
<g transform="translate(19.692307692307693 137.84615384615387)" style="transform:matrix(1, 0, 0, 1, 19.6923, 137.846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.475605;animation-play-state:paused;animation-delay:-7.70446s" >Z</text></g>
<g transform="translate(19.692307692307693 157.53846153846155)" style="transform:matrix(1, 0, 0, 1, 19.6923, 157.538);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.667908;animation-play-state:paused;animation-delay:-7.25198s" >K</text></g>
 
<g transform="translate(39.38461538461539 19.692307692307693)" style="transform:matrix(1, 0, 0, 1, 39.3846, 19.6923);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-11.0916s" >F</text></g>
<g transform="translate(39.38461538461539 39.38461538461539)" style="transform:matrix(1, 0, 0, 1, 39.3846, 39.3846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-10.6391s" >A</text></g>
<g transform="translate(39.38461538461539 59.07692307692308)" style="transform:matrix(1, 0, 0, 1, 39.3846, 59.0769);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-10.1867s" >I</text></g>
<g transform="translate(39.38461538461539 78.76923076923077)" style="transform:matrix(1, 0, 0, 1, 39.3846, 78.7692);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-9.73417s" >R</text></g>
<g transform="translate(39.38461538461539 98.46153846153847)" style="transform:matrix(1, 0, 0, 1, 39.3846, 98.4615);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-9.28168s" >Z</text></g>
<g transform="translate(39.38461538461539 118.15384615384616)" style="transform:matrix(1, 0, 0, 1, 39.3846, 118.154);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-8.82919s" >K</text></g>
<g transform="translate(39.38461538461539 137.84615384615387)" style="transform:matrix(1, 0, 0, 1, 39.3846, 137.846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.189902;animation-play-state:paused;animation-delay:-8.3767s" >D</text></g>
<g transform="translate(39.38461538461539 157.53846153846155)" style="transform:matrix(1, 0, 0, 1, 39.3846, 157.538);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.382206;animation-play-state:paused;animation-delay:-7.92422s" >o</text></g>
<g transform="translate(39.38461538461539 177.23076923076923)" style="transform:matrix(1, 0, 0, 1, 39.3846, 177.231);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.574515;animation-play-state:paused;animation-delay:-7.47173s" >m</text></g>
 
<g transform="translate(59.07692307692308 19.692307692307693)" style="transform:matrix(1, 0, 0, 1, 59.0769, 19.6923);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-10.0241s" >F</text></g>
<g transform="translate(59.07692307692308 39.38461538461539)" style="transform:matrix(1, 0, 0, 1, 59.0769, 39.3846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-9.57159s" >F</text></g>
<g transform="translate(59.07692307692308 59.07692307692308)" style="transform:matrix(1, 0, 0, 1, 59.0769, 59.0769);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-9.1191s" >K</text></g>
<g transform="translate(59.07692307692308 78.76923076923077)" style="transform:matrix(1, 0, 0, 1, 59.0769, 78.7692);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.0666908;animation-play-state:paused;animation-delay:-8.66661s" >Z</text></g>
<g transform="translate(59.07692307692308 98.46153846153847)" style="transform:matrix(1, 0, 0, 1, 59.0769, 98.4615);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.258995;animation-play-state:paused;animation-delay:-8.21413s" >i</text></g>
<g transform="translate(59.07692307692308 118.15384615384616)" style="transform:matrix(1, 0, 0, 1, 59.0769, 118.154);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.451303;animation-play-state:paused;animation-delay:-7.76164s" >Z</text></g>
<g transform="translate(59.07692307692308 137.84615384615387)" style="transform:matrix(1, 0, 0, 1, 59.0769, 137.846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.643611;animation-play-state:paused;animation-delay:-7.30915s" >r</text></g>
<g transform="translate(59.07692307692308 157.53846153846155)" style="transform:matrix(1, 0, 0, 1, 59.0769, 157.538);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.835919;animation-play-state:paused;animation-delay:-6.85666s" >i</text></g>
<g transform="translate(59.07692307692308 177.23076923076923)" style="transform:matrix(1, 0, 0, 1, 59.0769, 177.231);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);animation-play-state:paused;animation-delay:-6.40417s" >i</text></g>
 
<g transform="translate(78.76923076923077 19.692307692307693)" style="transform:matrix(1, 0, 0, 1, 78.7692, 19.6923);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-10.447s" >o</text></g>
<g transform="translate(78.76923076923077 39.38461538461539)" style="transform:matrix(1, 0, 0, 1, 78.7692, 39.3846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-9.99448s" >n</text></g>
<g transform="translate(78.76923076923077 59.07692307692308)" style="transform:matrix(1, 0, 0, 1, 78.7692, 59.0769);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-9.542s" >i</text></g>
<g transform="translate(78.76923076923077 78.76923076923077)" style="transform:matrix(1, 0, 0, 1, 78.7692, 78.7692);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-9.08951s" >o</text></g>
<g transform="translate(78.76923076923077 98.46153846153847)" style="transform:matrix(1, 0, 0, 1, 78.7692, 98.4615);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.0792665;animation-play-state:paused;animation-delay:-8.63702s" >a</text></g>
<g transform="translate(78.76923076923077 118.15384615384616)" style="transform:matrix(1, 0, 0, 1, 78.7692, 118.154);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.271575;animation-play-state:paused;animation-delay:-8.18453s" >i</text></g>
<g transform="translate(78.76923076923077 137.84615384615387)" style="transform:matrix(1, 0, 0, 1, 78.7692, 137.846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.463883;animation-play-state:paused;animation-delay:-7.73204s" >m</text></g>
<g transform="translate(78.76923076923077 157.53846153846155)" style="transform:matrix(1, 0, 0, 1, 78.7692, 157.538);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.656191;animation-play-state:paused;animation-delay:-7.27955s" >a</text></g>
<g transform="translate(78.76923076923077 177.23076923076923)" style="transform:matrix(1, 0, 0, 1, 78.7692, 177.231);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.848499;animation-play-state:paused;animation-delay:-6.82706s" >n</text></g>
 
<g transform="translate(98.46153846153847 19.692307692307693)" style="transform:matrix(1, 0, 0, 1, 98.4615, 19.6923);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.0416158;animation-play-state:paused;animation-delay:-8.72561s" >i</text></g>
<g transform="translate(98.46153846153847 39.38461538461539)" style="transform:matrix(1, 0, 0, 1, 98.4615, 39.3846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.233924;animation-play-state:paused;animation-delay:-8.27312s" >F</text></g>
<g transform="translate(98.46153846153847 59.07692307692308)" style="transform:matrix(1, 0, 0, 1, 98.4615, 59.0769);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.426232;animation-play-state:paused;animation-delay:-7.82063s" >K</text></g>
<g transform="translate(98.46153846153847 78.76923076923077)" style="transform:matrix(1, 0, 0, 1, 98.4615, 78.7692);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.618541;animation-play-state:paused;animation-delay:-7.36814s" >F</text></g>
<g transform="translate(98.46153846153847 98.46153846153847)" style="transform:matrix(1, 0, 0, 1, 98.4615, 98.4615);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.6;animation-play-state:paused;animation-delay:-6.91565s" >r</text></g>
<g transform="translate(98.46153846153847 118.15384615384616)" style="transform:matrix(1, 0, 0, 1, 98.4615, 118.154);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);animation-play-state:paused;animation-delay:-6.46316s" >i</text></g>
<g transform="translate(98.46153846153847 137.84615384615387)" style="transform:matrix(1, 0, 0, 1, 98.4615, 137.846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);animation-play-state:paused;animation-delay:-6.01068s" >i</text></g>
<g transform="translate(98.46153846153847 157.53846153846155)" style="transform:matrix(1, 0, 0, 1, 98.4615, 157.538);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-5.55819s" >K</text></g>
 
<g transform="translate(98.46153846153847 256)" style="transform:matrix(1, 0, 0, 1, 98.4615, 256);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-3.29574s" >r</text></g>
<g transform="translate(118.15384615384616 19.692307692307693)" style="transform:matrix(1, 0, 0, 1, 118.154, 19.6923);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-6.76841s" >Z</text></g>
<g transform="translate(118.15384615384616 39.38461538461539)" style="transform:matrix(1, 0, 0, 1, 118.154, 39.3846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-6.31592s" >K</text></g>
<g transform="translate(118.15384615384616 59.07692307692308)" style="transform:matrix(1, 0, 0, 1, 118.154, 59.0769);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-5.86343s" >i</text></g>
<g transform="translate(118.15384615384616 78.76923076923077)" style="transform:matrix(1, 0, 0, 1, 118.154, 78.7692);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-5.41094s" >Z</text></g>
<g transform="translate(118.15384615384616 98.46153846153847)" style="transform:matrix(1, 0, 0, 1, 118.154, 98.4615);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-4.95846s" >K</text></g>
<g transform="translate(118.15384615384616 118.15384615384616)" style="transform:matrix(1, 0, 0, 1, 118.154, 118.154);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-4.50597s" >i</text></g>
<g transform="translate(118.15384615384616 137.84615384615387)" style="transform:matrix(1, 0, 0, 1, 118.154, 137.846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-4.05348s" >K</text></g>
<g transform="translate(118.15384615384616 157.53846153846155)" style="transform:matrix(1, 0, 0, 1, 118.154, 157.538);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-3.60099s" >r</text></g>
<g transform="translate(118.15384615384616 177.23076923076923)" style="transform:matrix(1, 0, 0, 1, 118.154, 177.231);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-3.1485s" >i</text></g>


<g transform="translate(137.84615384615387 19.692307692307693)" style="transform:matrix(1, 0, 0, 1, 137.846, 19.6923);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-11.3801s" >a</text></g>
<g transform="translate(137.84615384615387 39.38461538461539)" style="transform:matrix(1, 0, 0, 1, 137.846, 39.3846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-10.9277s" >s</text></g>
<g transform="translate(137.84615384615387 59.07692307692308)" style="transform:matrix(1, 0, 0, 1, 137.846, 59.0769);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-10.4752s" >a</text></g>
<g transform="translate(137.84615384615387 78.76923076923077)" style="transform:matrix(1, 0, 0, 1, 137.846, 78.7692);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-10.0227s" >m</text></g>
<g transform="translate(137.84615384615387 98.46153846153847)" style="transform:matrix(1, 0, 0, 1, 137.846, 98.4615);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-9.57019s" >a</text></g>
<g transform="translate(137.84615384615387 118.15384615384616)" style="transform:matrix(1, 0, 0, 1, 137.846, 118.154);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-9.1177s" >o</text></g>
<g transform="translate(137.84615384615387 137.84615384615387)" style="transform:matrix(1, 0, 0, 1, 137.846, 137.846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.0672857;animation-play-state:paused;animation-delay:-8.66521s" >s</text></g>
<g transform="translate(137.84615384615387 157.53846153846155)" style="transform:matrix(1, 0, 0, 1, 137.846, 157.538);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-8.21272s" >s</text></g>
<g transform="translate(137.84615384615387 177.23076923076923)" style="transform:matrix(1, 0, 0, 1, 137.846, 177.231);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.2;animation-play-state:paused;animation-delay:-7.76024s" >i</text></g>


<g transform="translate(157.53846153846155 19.692307692307693)" style="transform:matrix(1, 0, 0, 1, 157.538, 19.6923);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.514925;animation-play-state:paused;animation-delay:-7.61194s" >F</text></g>
<g transform="translate(157.53846153846155 39.38461538461539)" style="transform:matrix(1, 0, 0, 1, 157.538, 39.3846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.5;animation-play-state:paused;animation-delay:-7.15946s" >K</text></g>
<g transform="translate(157.53846153846155 59.07692307692308)" style="transform:matrix(1, 0, 0, 1, 157.538, 59.0769);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.6;animation-play-state:paused;animation-delay:-6.70697s" >a</text></g>
<g transform="translate(157.53846153846155 78.76923076923077)" style="transform:matrix(1, 0, 0, 1, 157.538, 78.7692);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);animation-play-state:paused;animation-delay:-6.25448s" >Z</text></g>
<g transform="translate(157.53846153846155 98.46153846153847)" style="transform:matrix(1, 0, 0, 1, 157.538, 98.4615);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-5.80199s" >F</text></g>
<g transform="translate(157.53846153846155 118.15384615384616)" style="transform:matrix(1, 0, 0, 1, 157.538, 118.154);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-5.3495s" >a</text></g>
<g transform="translate(157.53846153846155 137.84615384615387)" style="transform:matrix(1, 0, 0, 1, 157.538, 137.846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-4.89701s" >i</text></g>
<g transform="translate(157.53846153846155 157.53846153846155)" style="transform:matrix(1, 0, 0, 1, 157.538, 157.538);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-4.44452s" >F</text></g>
<g transform="translate(157.53846153846155 177.23076923076923)" style="transform:matrix(1, 0, 0, 1, 157.538, 177.231);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-3.99204s" >F</text></g>


<g transform="translate(177.23076923076923 19.692307692307693)" style="transform:matrix(1, 0, 0, 1, 177.231, 19.6923);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-11.1214s" >K</text></g>
<g transform="translate(177.23076923076923 39.38461538461539)" style="transform:matrix(1, 0, 0, 1, 177.231, 39.3846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-10.6689s" >F</text></g>
<g transform="translate(177.23076923076923 59.07692307692308)" style="transform:matrix(1, 0, 0, 1, 177.231, 59.0769);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-10.2164s" >a</text></g>
<g transform="translate(177.23076923076923 78.76923076923077)" style="transform:matrix(1, 0, 0, 1, 177.231, 78.7692);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-9.76389s" >a</text></g>
<g transform="translate(177.23076923076923 98.46153846153847)" style="transform:matrix(1, 0, 0, 1, 177.231, 98.4615);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-9.31141s" >i</text></g>
<g transform="translate(177.23076923076923 118.15384615384616)" style="transform:matrix(1, 0, 0, 1, 177.231, 118.154);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-8.85892s" >r</text></g>
<g transform="translate(177.23076923076923 137.84615384615387)" style="transform:matrix(1, 0, 0, 1, 177.231, 137.846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.05;animation-play-state:paused;animation-delay:-8.40643s" >a</text></g>
<g transform="translate(177.23076923076923 157.53846153846155)" style="transform:matrix(1, 0, 0, 1, 177.231, 157.538);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-7.95394s" >r</text></g>
<g transform="translate(177.23076923076923 177.23076923076923)" style="transform:matrix(1, 0, 0, 1, 177.231, 177.231);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.3;animation-play-state:paused;animation-delay:-7.50145s" >a</text></g>


<g transform="translate(196.92307692307693 19.692307692307693)" style="transform:matrix(1, 0, 0, 1, 196.923, 19.6923);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-10.6761s" >a</text></g>
<g transform="translate(196.92307692307693 39.38461538461539)" style="transform:matrix(1, 0, 0, 1, 196.923, 39.3846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-10.2236s" >a</text></g>
<g transform="translate(196.92307692307693 59.07692307692308)" style="transform:matrix(1, 0, 0, 1, 196.923, 59.0769);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-9.77113s" >i</text></g>
<g transform="translate(196.92307692307693 78.76923076923077)" style="transform:matrix(1, 0, 0, 1, 196.923, 78.7692);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-9.31865s" >s</text></g>
<g transform="translate(196.92307692307693 98.46153846153847)" style="transform:matrix(1, 0, 0, 1, 196.923, 98.4615);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-8.86616s" >o</text></g>
<g transform="translate(196.92307692307693 118.15384615384616)" style="transform:matrix(1, 0, 0, 1, 196.923, 118.154);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.05;animation-play-state:paused;animation-delay:-8.41367s" >i</text></g>
<g transform="translate(196.92307692307693 137.84615384615387)" style="transform:matrix(1, 0, 0, 1, 196.923, 137.846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-7.96118s" >o</text></g>


<g transform="translate(216.61538461538464 19.692307692307693)" style="transform:matrix(1, 0, 0, 1, 216.615, 19.6923);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-9.72178s" >r</text></g>
<g transform="translate(216.61538461538464 39.38461538461539)" style="transform:matrix(1, 0, 0, 1, 216.615, 39.3846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-9.26929s" >F</text></g>
<g transform="translate(216.61538461538464 59.07692307692308)" style="transform:matrix(1, 0, 0, 1, 216.615, 59.0769);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.00286;animation-play-state:paused;animation-delay:-8.8168s" >a</text></g>
<g transform="translate(216.61538461538464 78.76923076923077)" style="transform:matrix(1, 0, 0, 1, 216.615, 78.7692);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.05;animation-play-state:paused;animation-delay:-8.36431s" >a</text></g>
<g transform="translate(216.61538461538464 98.46153846153847)" style="transform:matrix(1, 0, 0, 1, 216.615, 98.4615);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-7.91182s" >a</text></g>
<g transform="translate(216.61538461538464 118.15384615384616)" style="transform:matrix(1, 0, 0, 1, 216.615, 118.154);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.3;animation-play-state:paused;animation-delay:-7.45933s" >Z</text></g>
<g transform="translate(216.61538461538464 137.84615384615387)" style="transform:matrix(1, 0, 0, 1, 216.615, 137.846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.5;animation-play-state:paused;animation-delay:-7.00684s" >i</text></g>


<g transform="translate(236.30769230769232 19.692307692307693)" style="transform:matrix(1, 0, 0, 1, 236.308, 19.6923);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:1;animation-play-state:paused;animation-delay:-7.08735s" >D</text></g>
<g transform="translate(236.30769230769232 39.38461538461539)" style="transform:matrix(1, 0, 0, 1, 236.308, 39.3846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.9;animation-play-state:paused;animation-delay:-6.63486s" >O</text></g>
<g transform="translate(236.30769230769232 59.07692307692308)" style="transform:matrix(1, 0, 0, 1, 236.308, 59.0769);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.8;animation-play-state:paused;animation-delay:-6.18238s" >M</text></g>
<g transform="translate(236.30769230769232 78.76923076923077)" style="transform:matrix(1, 0, 0, 1, 236.308, 78.7692);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.7;animation-play-state:paused;animation-delay:-5.72989s" >A</text></g>
<g transform="translate(236.30769230769232 98.46153846153847)" style="transform:matrix(1, 0, 0, 1, 236.308, 98.4615);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.6;animation-play-state:paused;animation-delay:-5.2774s" >I</text></g>
<g transform="translate(236.30769230769232 118.15384615384616)" style="transform:matrix(1, 0, 0, 1, 236.308, 118.154);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.5;animation-play-state:paused;animation-delay:-4.82491s" >N</text></g>
<g transform="translate(236.30769230769232 137.84615384615387)" style="transform:matrix(1, 0, 0, 1, 236.308, 137.846);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.4;animation-play-state:paused;animation-delay:-4.37242s" >S</text></g>

<g transform="translate(236.30769230769232 196.92307692307693)" style="transform:matrix(1, 0, 0, 1, 236.308, 196.923);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-3.01495s" >a</text></g>
<g transform="translate(236.30769230769232 216.61538461538464)" style="transform:matrix(1, 0, 0, 1, 236.308, 216.615);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-2.56247s" >r</text></g>
<g transform="translate(236.30769230769232 236.30769230769232)" style="transform:matrix(1, 0, 0, 1, 236.308, 236.308);animation-play-state:paused" ><text fill="#ffffff" style="transform:matrix(0.7, 0, 0, 1, 0, 0);opacity:0.1;animation-play-state:paused;animation-delay:-2.10998s" >r</text></g>

    ${
      isNormalized
        ? ''
        : `
      <rect x="200" y="34" width="40" height="40" rx="20" fill="#E13021" fill-opacity="0.8"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M217.472 44.4655C218.581 42.5115 221.42 42.5115 222.528 44.4655L230.623 58.7184C231.711 60.6351 230.314 63 228.096 63H211.905C209.686 63 208.289 60.6351 209.377 58.7184L217.472 44.4655ZM221.451 58.6911C221.451 59.0722 221.298 59.4376 221.026 59.7071C220.754 59.9765 220.385 60.1279 220 60.1279C219.615 60.1279 219.246 59.9765 218.974 59.7071C218.702 59.4376 218.549 59.0722 218.549 58.6911C218.549 58.31 218.702 57.9446 218.974 57.6751C219.246 57.4057 219.615 57.2543 220 57.2543C220.385 57.2543 220.754 57.4057 221.026 57.6751C221.298 57.9446 221.451 58.31 221.451 58.6911V58.6911ZM220 47.1968C219.615 47.1968 219.246 47.3482 218.974 47.6177C218.702 47.8871 218.549 48.2526 218.549 48.6336V52.944C218.549 53.325 218.702 53.6905 218.974 53.9599C219.246 54.2294 219.615 54.3807 220 54.3807C220.385 54.3807 220.754 54.2294 221.026 53.9599C221.298 53.6905 221.451 53.325 221.451 52.944V48.6336C221.451 48.2526 221.298 47.8871 221.026 47.6177C220.754 47.3482 220.385 47.1968 220 47.1968Z" fill="white"/>
      <path opacity="0.6" d="M36.791 196V183.947H34.411V196H36.791ZM41.6133 191.189C41.6133 190.22 42.1913 189.455 43.1773 189.455C44.2653 189.455 44.7243 190.186 44.7243 191.121V196H46.9853V190.73C46.9853 188.894 46.0333 187.415 43.9593 187.415C43.0583 187.415 42.0553 187.806 41.5453 188.673V187.636H39.3523V196H41.6133V191.189ZM56.9874 187.636H54.6074L52.6184 193.246L50.5444 187.636H48.0624L51.4794 196H53.7404L56.9874 187.636ZM57.6689 193.722C57.6689 195.031 58.7569 196.238 60.5419 196.238C61.7829 196.238 62.5819 195.66 63.0069 194.997C63.0069 195.32 63.0409 195.779 63.0919 196H65.1659C65.1149 195.711 65.0639 195.116 65.0639 194.674V190.56C65.0639 188.877 64.0779 187.381 61.4259 187.381C59.1819 187.381 57.9749 188.826 57.8389 190.135L59.8449 190.56C59.9129 189.829 60.4569 189.2 61.4429 189.2C62.3949 189.2 62.8539 189.693 62.8539 190.288C62.8539 190.577 62.7009 190.815 62.2249 190.883L60.1679 191.189C58.7739 191.393 57.6689 192.226 57.6689 193.722ZM61.0179 194.555C60.2869 194.555 59.9299 194.079 59.9299 193.586C59.9299 192.94 60.3889 192.617 60.9669 192.532L62.8539 192.243V192.617C62.8539 194.096 61.9699 194.555 61.0179 194.555ZM69.5703 196V183.692H67.3093V196H69.5703ZM74.1358 196V187.636H71.8748V196H74.1358ZM71.6028 184.899C71.6028 185.647 72.2318 186.276 72.9968 186.276C73.7788 186.276 74.3908 185.647 74.3908 184.899C74.3908 184.117 73.7788 183.488 72.9968 183.488C72.2318 183.488 71.6028 184.117 71.6028 184.899ZM84.5322 183.692H82.3052V188.469C82.0672 188.027 81.3872 187.432 79.9422 187.432C77.5792 187.432 75.9302 189.353 75.9302 191.801C75.9302 194.334 77.6302 196.204 80.0102 196.204C81.1322 196.204 81.9822 195.694 82.3562 195.031C82.3562 195.422 82.4072 195.83 82.4412 196H84.6002C84.5662 195.66 84.5322 195.048 84.5322 194.487V183.692ZM78.2082 191.801C78.2082 190.305 79.1262 189.455 80.2822 189.455C81.4382 189.455 82.3392 190.288 82.3392 191.784C82.3392 193.297 81.4382 194.181 80.2822 194.181C79.0922 194.181 78.2082 193.297 78.2082 191.801ZM93.1445 191.189C93.1445 190.22 93.7225 189.455 94.7085 189.455C95.7965 189.455 96.2555 190.186 96.2555 191.121V196H98.5165V190.73C98.5165 188.894 97.5645 187.415 95.4905 187.415C94.5895 187.415 93.5865 187.806 93.0765 188.673V187.636H90.8835V196H93.1445V191.189ZM100.252 193.722C100.252 195.031 101.34 196.238 103.125 196.238C104.366 196.238 105.165 195.66 105.59 194.997C105.59 195.32 105.624 195.779 105.675 196H107.749C107.698 195.711 107.647 195.116 107.647 194.674V190.56C107.647 188.877 106.661 187.381 104.009 187.381C101.765 187.381 100.558 188.826 100.422 190.135L102.428 190.56C102.496 189.829 103.04 189.2 104.026 189.2C104.978 189.2 105.437 189.693 105.437 190.288C105.437 190.577 105.284 190.815 104.808 190.883L102.751 191.189C101.357 191.393 100.252 192.226 100.252 193.722ZM103.601 194.555C102.87 194.555 102.513 194.079 102.513 193.586C102.513 192.94 102.972 192.617 103.55 192.532L105.437 192.243V192.617C105.437 194.096 104.553 194.555 103.601 194.555ZM112.153 196V191.104C112.153 190.186 112.731 189.455 113.717 189.455C114.737 189.455 115.196 190.135 115.196 191.036V196H117.44V191.104C117.44 190.203 118.018 189.455 118.987 189.455C120.024 189.455 120.466 190.135 120.466 191.036V196H122.659V190.577C122.659 188.333 121.18 187.398 119.633 187.398C118.528 187.398 117.644 187.772 116.981 188.792C116.556 187.891 115.638 187.398 114.499 187.398C113.581 187.398 112.51 187.84 112.051 188.656V187.636H109.892V196H112.153ZM126.669 190.866C126.72 190.101 127.366 189.217 128.539 189.217C129.831 189.217 130.375 190.033 130.409 190.866H126.669ZM130.63 193.042C130.358 193.79 129.78 194.317 128.726 194.317C127.604 194.317 126.669 193.518 126.618 192.413H132.602C132.602 192.379 132.636 192.039 132.636 191.716C132.636 189.03 131.089 187.381 128.505 187.381C126.363 187.381 124.391 189.115 124.391 191.784C124.391 194.606 126.414 196.255 128.709 196.255C130.766 196.255 132.092 195.048 132.517 193.603L130.63 193.042Z" fill="black"/>
    `
    }
    ${subdomainText || ''}
    <text
      x="32.5"
      y="231"
      font-size="${domainFontSize}px"
      ${isSubdomain ? 'opacity="0.4"' : ''}
      fill="${isNormalized ? "white" : "black"}"
      filter="url(#dropShadow)">${domain}</text>
    <defs>
      <style type="text/css">
        @font-face { 
          font-family: "Satoshi";
          font-style: normal;
          font-weight: 600 900;
          src: url(${fontSatoshiBold});
        }
      </style>
      <style>
        text {
          font-family: 'Satoshi', 'Noto Color Emoji', 'Apple Color Emoji', sans-serif;
          font-style: normal;
          font-variant-numeric: tabular-nums;
          font-weight: bold;
          font-variant-ligatures: none;
          font-feature-settings: "ss01" on, "ss03" on;
          -moz-font-feature-settings: "ss01" on, "ss03" on;
          line-height: 34px;
        }
      </style>
      <linearGradient id="paint0_linear" x1="190.5" y1="302" x2="-64" y2="-172.5" gradientUnits="userSpaceOnUse">
      ${
        version !== Version.v1w
          ? `<stop stop-color="#000000"/>
          <stop offset="0.428185" stop-color="#000000"/>
          <stop offset="1" stop-color="#000000"/>`
          : `<stop stop-color="#000000"/>
        <stop offset="1" stop-color="#000000"/>`
      }
      </linearGradient>
      <linearGradient id="paint1_linear" x1="0" y1="0" x2="269.553" y2="285.527" gradientUnits="userSpaceOnUse">
        <stop stop-color="#CCCCCC"/>
        <stop offset="1" stop-color="#CCCCCC"/>
      </linearGradient>
    </defs>
  </svg>`;
}