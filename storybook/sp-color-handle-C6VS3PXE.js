import './sp-color-loupe-C-eJDnat.js';
import { i } from './lit-element-BulMEkr1.js';
import { S as SpectrumElement, n, d as defineElement } from './define-element-2VgsDjbW.js';
import { x } from './lit-html-COgVUehj.js';
import './opacity-checkerboard.css-RLapebzO.js';

const e=i`
            :host{background:repeating-conic-gradient(var(--mod-opacity-checkerboard-light,var(--spectrum-opacity-checkerboard-square-light))0 25%,var(--mod-opacity-checkerboard-dark,var(--spectrum-opacity-checkerboard-square-dark))0 50%)0 0/calc(var(--mod-opacity-checkerboard-size,var(--spectrum-opacity-checkerboard-square-size))*2)calc(var(--mod-opacity-checkerboard-size,var(--spectrum-opacity-checkerboard-square-size))*2)}@supports (background:repeating-conic-gradient(from 0deg, red 0deg, red 0deg 1deg, red 2deg)
){:host{background:repeating-conic-gradient(var(--mod-opacity-checkerboard-light,var(--spectrum-opacity-checkerboard-square-light))0 25%,var(--mod-opacity-checkerboard-dark,var(--spectrum-opacity-checkerboard-square-dark))0 50%)var(--mod-opacity-checkerboard-position,left top)/calc(var(--mod-opacity-checkerboard-size,var(--spectrum-opacity-checkerboard-square-size))*2)calc(var(--mod-opacity-checkerboard-size,var(--spectrum-opacity-checkerboard-square-size))*2)}}@media (forced-colors:active){:host{forced-color-adjust:none}}
        `;

const r=i`
    :host{--mod-opacity-checkerboard-position:50%;z-index:1;box-sizing:border-box;inline-size:var(--mod-colorhandle-size,var(--spectrum-colorhandle-size));block-size:var(--mod-colorhandle-size,var(--spectrum-colorhandle-size));margin-inline:calc(var(--mod-colorhandle-size,var(--spectrum-colorhandle-size))/2*-1);margin-block:calc(var(--mod-colorhandle-size,var(--spectrum-colorhandle-size))/2*-1);border-width:var(--mod-colorhandle-border-width,var(--spectrum-colorhandle-border-width));border-color:var(--highcontrast-colorhandle-border-color,var(--mod-colorhandle-border-color,var(--spectrum-colorhandle-border-color)));box-shadow:0 0 0 var(--mod-colorhandle-outer-border-width,var(--spectrum-colorhandle-outer-border-width))var(--mod-colorhandle-outer-border-color,var(--spectrum-colorhandle-outer-border-color));transition:all var(--mod-colorhandle-animation-duration,var(--spectrum-colorhandle-animation-duration))var(--mod-colorhandle-animation-easing,var(--spectrum-colorhandle-animation-easing));border-style:solid}:host,:host:after{border-radius:100%;display:block;position:absolute}:host:after{content:"";inset-inline:calc(50% - var(--mod-colorhandle-hitarea-size,var(--spectrum-colorhandle-hitarea-size))/2);inset-block:calc(50% - var(--mod-colorhandle-hitarea-size,var(--spectrum-colorhandle-hitarea-size))/2);inline-size:var(--mod-colorhandle-hitarea-size,var(--spectrum-colorhandle-hitarea-size));block-size:var(--mod-colorhandle-hitarea-size,var(--spectrum-colorhandle-hitarea-size));border-radius:var(--mod-colorhandle-hitarea-border-radius,100%)}:host([focused]),:host(:focus-visible){inline-size:var(--mod-colorhandle-focused-size,var(--spectrum-colorhandle-focused-size));block-size:var(--mod-colorhandle-focused-size,var(--spectrum-colorhandle-focused-size));margin-inline:calc(var(--mod-colorhandle-size,var(--spectrum-colorhandle-size))*-1);margin-block:calc(var(--mod-colorhandle-size,var(--spectrum-colorhandle-size))*-1);outline:none}:host([disabled]){pointer-events:none;border-color:var(--highcontrast-colorhandle-border-color-disabled,var(--mod-colorhandle-border-color-disabled,var(--spectrum-colorhandle-border-color-disabled)));background:var(--highcontrast-colorhandle-fill-color-disabled,var(--mod-colorhandle-fill-color-disabled,var(--spectrum-colorhandle-fill-color-disabled)));box-shadow:none}:host([disabled]) .inner{display:none}.inner{inline-size:100%;block-size:100%;box-shadow:inset 0 0 0 var(--mod-colorhandle-inner-border-width,var(--spectrum-colorhandle-inner-border-width))var(--mod-colorhandle-inner-border-color,var(--spectrum-colorhandle-inner-border-color));background-color:var(--spectrum-picked-color);border-radius:100%}@media (forced-colors:active){:host{forced-color-adjust:none}:host([disabled]){--highcontrast-colorhandle-border-color-disabled:GrayText;--highcontrast-colorhandle-fill-color-disabled:Canvas}}:host{--spectrum-colorhandle-size:var(--system-color-handle-size);--spectrum-colorhandle-focused-size:var(--system-color-handle-focused-size);--spectrum-colorhandle-hitarea-size:var(--system-color-handle-hitarea-size);--spectrum-colorhandle-animation-duration:var(--system-color-handle-animation-duration);--spectrum-colorhandle-animation-easing:var(--system-color-handle-animation-easing);--spectrum-colorhandle-outer-border-color:var(--system-color-handle-outer-border-color);--spectrum-colorhandle-outer-border-width:var(--system-color-handle-outer-border-width);--spectrum-colorhandle-inner-border-color:var(--system-color-handle-inner-border-color);--spectrum-colorhandle-inner-border-width:var(--system-color-handle-inner-border-width);--spectrum-colorhandle-border-width:var(--system-color-handle-border-width);--spectrum-colorhandle-border-color:var(--system-color-handle-border-color);--spectrum-colorhandle-border-color-disabled:var(--system-color-handle-border-color-disabled);--spectrum-colorhandle-fill-color-disabled:var(--system-color-handle-fill-color-disabled)}:host{touch-action:none;transition:inline-size var(--mod-colorhandle-animation-duration,var(--spectrum-colorhandle-animation-duration))var(--mod-colorhandle-animation-easing,var(--spectrum-colorhandle-animation-easing)),block-size var(--mod-colorhandle-animation-duration,var(--spectrum-colorhandle-animation-duration))var(--mod-colorhandle-animation-easing,var(--spectrum-colorhandle-animation-easing)),border-width var(--mod-colorhandle-animation-duration,var(--spectrum-colorhandle-animation-duration))var(--mod-colorhandle-animation-easing,var(--spectrum-colorhandle-animation-easing)),margin-inline var(--mod-colorhandle-animation-duration,var(--spectrum-colorhandle-animation-duration))var(--mod-colorhandle-animation-easing,var(--spectrum-colorhandle-animation-easing)),margin-block var(--mod-colorhandle-animation-duration,var(--spectrum-colorhandle-animation-duration))var(--mod-colorhandle-animation-easing,var(--spectrum-colorhandle-animation-easing))}:host(:focus){outline:none}
`;

var d=Object.defineProperty;var o=(s,r,e,i)=>{for(var t=void 0,n=s.length-1,l;n>=0;n--)(l=s[n])&&(t=(l(r,e,t))||t);return t&&d(r,e,t),t};class ColorHandle extends SpectrumElement{constructor(){super(...arguments);this.disabled=!1;this.focused=!1;this.open=!1;this.color="rgba(255, 0, 0, 0.5)";}static get styles(){return [e,r]}handlePointerdown(e){e.pointerType==="touch"&&(this.open=!0),this.setPointerCapture(e.pointerId);}handlePointerup(e){this.open=!1,this.releasePointerCapture(e.pointerId);}render(){return x`
            <div class="inner" style="background-color: ${this.color}"></div>
            <sp-color-loupe
                color=${this.color}
                ?open=${this.open&&!this.disabled}
            ></sp-color-loupe>
        `}firstUpdated(e){super.firstUpdated(e),this.addEventListener("pointerdown",this.handlePointerdown),this.addEventListener("pointerup",this.handlePointerup),this.addEventListener("pointercancel",this.handlePointerup);}}o([n({type:Boolean,reflect:!0})],ColorHandle.prototype,"disabled"),o([n({type:Boolean,reflect:!0})],ColorHandle.prototype,"focused"),o([n({type:Boolean,reflect:!0})],ColorHandle.prototype,"open"),o([n({type:String})],ColorHandle.prototype,"color");

defineElement("sp-color-handle",ColorHandle);
