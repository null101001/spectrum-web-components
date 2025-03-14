import { t as tag, s as setCustomTemplateLiteralTag } from './custom-tag-Diwq7nXX.js';
import { I as IconBase } from './IconBase-BC0FCRBc.js';
import { x } from './lit-html-COgVUehj.js';
import { d as defineElement } from './define-element-2VgsDjbW.js';

const AlertIcon=({width:a=24,height:t=24,hidden:e=!1,title:r="Alert"}={})=>tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 36 36"
    width="${a}"
    aria-hidden=${e?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label="${r}"
  >
    <path
      d="M17.127 2.579.4 32.512A1 1 0 0 0 1.272 34h33.456a1 1 0 0 0 .872-1.488L18.873 2.579a1 1 0 0 0-1.746 0ZM20 29.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Zm0-6a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Z"
    />
  </svg>`;

const AlertTriangleIcon=({width:l=24,height:r=24,hidden:t=!1,title:e="Alert Triangle"}={})=>tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${l}"
    height="${r}"
    viewBox="0 0 20 20"
    aria-hidden=${t?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label="${e}"
  >
    <path
      d="m9.99936,15.12334c-.23065.00812-.45538-.07378-.62661-.22835-.33033-.36462-.33033-.91993,0-1.28455.16935-.15832.39483-.24279.62664-.23476.23635-.00947.46589.08026.63302.24745.16207.1677.24916.39386.24137.62681.01238.23469-.06959.4646-.2277.63864-.17358.16455-.40786.24959-.64671.23475Z"
      fill="currentColor"
    />
    <path
      d="m10,11.75c-.41406,0-.75-.33594-.75-.75v-4c0-.41406.33594-.75.75-.75s.75.33594.75.75v4c0,.41406-.33594.75-.75.75Z"
      fill="currentColor"
    />
    <path
      d="m16.7334,18H3.2666c-.80029,0-1.52295-.41016-1.93262-1.09766s-.42725-1.51855-.04639-2.22266L8.021,2.23242c.39355-.72754,1.15186-1.17969,1.979-1.17969s1.58545.45215,1.979,1.17969l6.7334,12.44727c.38086.7041.36328,1.53516-.04639,2.22266s-1.13232,1.09766-1.93262,1.09766ZM10,2.55273c-.13428,0-.46777.03809-.65967.39258L2.60693,15.39258c-.18311.33887-.05029.63184.01562.74121.06543.11035.25928.36621.64404.36621h13.4668c.38477,0,.57861-.25586.64404-.36621.06592-.10938.19873-.40234.01562-.74121L10.65967,2.94531c-.19189-.35449-.52539-.39258-.65967-.39258Z"
      fill="currentColor"
    />
  </svg>`;

class IconAlert extends IconBase{render(){return setCustomTemplateLiteralTag(x),this.spectrumVersion===1?AlertIcon({hidden:!this.label,title:this.label}):AlertTriangleIcon({hidden:!this.label,title:this.label})}}

defineElement("sp-icon-alert",IconAlert);

export { AlertIcon as A, AlertTriangleIcon as a };
