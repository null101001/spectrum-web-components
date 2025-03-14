import { t as tag, s as setCustomTemplateLiteralTag } from './custom-tag-Diwq7nXX.js';
import { F as FileTxtIcon } from './FileTxt-yDtaKaPa.js';
import { I as IconBase } from './IconBase-BC0FCRBc.js';
import { x } from './lit-html-COgVUehj.js';
import { d as defineElement } from './define-element-2VgsDjbW.js';

const FileTextIcon=({width:t=24,height:e=24,hidden:l=!1,title:r="File Text"}={})=>tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${t}"
    height="${e}"
    viewBox="0 0 20 20"
    aria-hidden=${l?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label="${r}"
  >
    <path
      d="m16.34082,5.2959l-3.62109-3.62207c-.41895-.41895-.99902-.65918-1.59082-.65918h-5.87891c-1.24023,0-2.25,1.00977-2.25,2.25v12.4834c0,1.24023,1.00977,2.25,2.25,2.25h9.5c1.24023,0,2.25-1.00977,2.25-2.25V6.88672c0-.60059-.23438-1.16602-.65918-1.59082Zm-1.06055,1.06055c.04614.04614.07397.10352.10596.1582h-3.13623c-.41309,0-.75-.33691-.75-.75v-3.13623c.05542.03223.11353.0603.15918.10596l3.62109,3.62207Zm-.53027,10.1416H5.25c-.41309,0-.75-.33691-.75-.75V3.26465c0-.41309.33691-.75.75-.75h4.75v3.25c0,1.24023,1.00977,2.25,2.25,2.25h3.25v7.7334c0,.41309-.33691.75-.75.75Z"
      fill="currentColor"
    />
    <path
      d="m13,11.49805h-6c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h6c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"
      fill="currentColor"
    />
    <path
      d="m13,14.49805h-6c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h6c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"
      fill="currentColor"
    />
  </svg>`;

class IconFileTxt extends IconBase{render(){return setCustomTemplateLiteralTag(x),this.spectrumVersion===1?FileTxtIcon({hidden:!this.label,title:this.label}):FileTextIcon({hidden:!this.label,title:this.label})}}

defineElement("sp-icon-file-txt",IconFileTxt);

export { FileTextIcon as F };
