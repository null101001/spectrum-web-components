import { t as tag, s as setCustomTemplateLiteralTag } from './custom-tag-Diwq7nXX.js';
import { E as ExportIcon } from './Export-D9hPW9DI.js';
import { I as IconBase } from './IconBase-BC0FCRBc.js';
import { x } from './lit-html-COgVUehj.js';
import { d as defineElement } from './define-element-2VgsDjbW.js';

const ExportToIcon=({width:t=24,height:r=24,hidden:e=!1,title:l="Export To"}={})=>tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${t}"
    height="${r}"
    viewBox="0 0 20 20"
    aria-hidden=${e?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label="${l}"
  >
    <path
      d="m18,15.75v-3.71924c0-.41406-.33594-.75-.75-.75s-.75.33594-.75.75v3.71924c0,.41357-.33643.75-.75.75H4.25c-.41357,0-.75-.33643-.75-.75V4.25c0-.41357.33643-.75.75-.75h3.81104c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75h-3.81104c-1.24072,0-2.25,1.00928-2.25,2.25v11.5c0,1.24072,1.00928,2.25,2.25,2.25h11.5c1.24072,0,2.25-1.00928,2.25-2.25Z"
      fill="currentColor"
    />
    <path
      d="m19,1.75v4.24268c0,.41406-.33594.75-.75.75s-.75-.33594-.75-.75v-2.43213l-6.46973,6.46973c-.14648.14648-.33838.21973-.53027.21973s-.38379-.07324-.53027-.21973c-.29297-.29297-.29297-.76758,0-1.06055l6.46973-6.46973h-2.43213c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h4.24268c.41406,0,.75.33594.75.75Z"
      fill="currentColor"
    />
  </svg>`;

class IconExport extends IconBase{render(){return setCustomTemplateLiteralTag(x),this.spectrumVersion===1?ExportIcon({hidden:!this.label,title:this.label}):ExportToIcon({hidden:!this.label,title:this.label})}}

defineElement("sp-icon-export",IconExport);

export { ExportToIcon as E };
