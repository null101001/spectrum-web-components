import { t as tag, s as setCustomTemplateLiteralTag } from './custom-tag-Diwq7nXX.js';
import { F as FolderOpenIcon$1 } from './FolderOpen-C77zO5bd.js';
import { I as IconBase } from './IconBase-BC0FCRBc.js';
import { x } from './lit-html-COgVUehj.js';
import { d as defineElement } from './define-element-2VgsDjbW.js';

const FolderOpenIcon=({width:e=24,height:l=24,hidden:t=!1,title:r="Folder Open"}={})=>tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${e}"
    height="${l}"
    viewBox="0 0 20 20"
    aria-hidden=${t?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label="${r}"
  >
    <path
      d="M19.21143,8.89648c-.4292-.56934-1.08398-.89648-1.79736-.89648H6.65918c-.99756,0-1.88672.66992-2.1626,1.62891l-1.64954,5.73682c-.20404-.13428-.34705-.35413-.34705-.61572V4.25c0-.41309.33643-.75.75-.75h3.56494c.21826,0,.42529.09473.56689.25684l1.70117,1.96875c.42773.49219,1.04688.77441,1.69922.77441h6.18945c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75h-6.18945c-.21777,0-.42432-.09473-.56592-.25684l-1.70117-1.96875c-.42773-.49219-1.04736-.77441-1.7002-.77441h-3.56494c-1.24072,0-2.25,1.00977-2.25,2.25v10.5c0,1.24023,1.00928,2.25,2.25,2.25.0235,0,.04327-.01123.06622-.01343.01978.00171.03687.01343.05682.01343h12.74756c.99805,0,1.88721-.66992,2.16211-1.62891l1.29395-4.5c.19727-.68457.06396-1.4043-.36523-1.97461ZM18.13525,10.45703l-1.29395,4.5c-.0918.31934-.38818.54297-.7207.54297H4.36914l1.56885-5.45703c.09229-.31934.38867-.54297.72119-.54297h10.75488c.23779,0,.45605.10938.59912.29883.14307.19043.1875.42969.12207.6582Z"
      fill="currentColor"
    />
  </svg>`;

class IconFolderOpen extends IconBase{render(){return setCustomTemplateLiteralTag(x),this.spectrumVersion===2?FolderOpenIcon({hidden:!this.label,title:this.label}):FolderOpenIcon$1({hidden:!this.label,title:this.label})}}

defineElement("sp-icon-folder-open",IconFolderOpen);
