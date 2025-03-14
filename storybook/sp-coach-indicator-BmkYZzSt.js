import { i } from './lit-element-BulMEkr1.js';
import { S as SpectrumElement, n, d as defineElement } from './define-element-2VgsDjbW.js';
import { x } from './lit-html-COgVUehj.js';

const a=i`
    :host{margin:var(--mod-coach-indicator-gap,var(--spectrum-coach-indicator-gap));min-inline-size:var(--mod-coach-indicator-min-inline-size,var(--spectrum-coach-indicator-min-inline-size));min-block-size:var(--mod-coach-indicator-min-block-size,var(--spectrum-coach-indicator-min-block-size));inline-size:var(--mod-coach-indicator-inline-size,var(--spectrum-coach-indicator-inline-size));block-size:var(--mod-coach-indicator-block-size,var(--spectrum-coach-indicator-block-size));position:relative}:host([quiet]){--mod-coach-indicator-min-inline-size:calc(var(--mod-coach-indicator-quiet-ring-diameter,var(--spectrum-coach-indicator-quiet-ring-diameter-size))*2.75);--mod-coach-indicator-min-block-size:calc(var(--mod-coach-indicator-quiet-ring-diameter,var(--spectrum-coach-indicator-quiet-ring-diameter-size))*2.75);--mod-coach-indicator-inline-size:calc(var(--mod-coach-indicator-quiet-ring-diameter,var(--spectrum-coach-indicator-quiet-ring-diameter-size))*2.75);--mod-coach-indicator-block-size:calc(var(--mod-coach-indicator-quiet-ring-diameter,var(--spectrum-coach-indicator-quiet-ring-diameter-size))*2.75);--mod-coach-indicator-ring-inline-size:var(--mod-coach-indicator-quiet-ring-diameter,var(--spectrum-coach-indicator-quiet-ring-diameter-size));--mod-coach-indicator-ring-block-size:var(--mod-coach-indicator-quiet-ring-diameter,var(--spectrum-coach-indicator-quiet-ring-diameter-size));--mod-coach-indicator-top:calc(var(--mod-coach-indicator-min-inline-size)/3 - var(--spectrum-coach-indicator-ring-border-size));--mod-coach-indicator-left:calc(var(--mod-coach-indicator-min-inline-size)/3 - var(--spectrum-coach-indicator-ring-border-size));--mod-coach-indicator-inner-animation-delay-multiple:var(--mod-coach-indicator-quiet-animation-ring-inner-delay-multiple,var(--spectrum-coach-indicator-quiet-animation-ring-inner-delay-multiple))}.ring{border-style:solid;border-width:var(--mod-coach-indicator-ring-border-size,var(--spectrum-coach-indicator-ring-border-size));border-color:var(--mod-coach-indicator-ring-default-color,var(--spectrum-coach-indicator-ring-default-color));inline-size:var(--mod-coach-indicator-ring-inline-size,var(--spectrum-coach-indicator-ring-inline-size));block-size:var(--mod-coach-indicator-ring-block-size,var(--spectrum-coach-indicator-ring-block-size));animation:var(--mod-coach-indicator-animation-name,var(--spectrum-coach-indicator-animation-name))var(--mod-coach-animation-indicator-ring-duration,var(--spectrum-coach-animation-indicator-ring-duration))linear infinite;border-radius:50%;display:block;position:absolute;inset-block-start:var(--mod-coach-indicator-top,var(--spectrum-coach-indicator-top));inset-inline-start:var(--mod-coach-indicator-left,var(--spectrum-coach-indicator-left))}.ring:first-child{animation-delay:calc(var(--mod-coach-animation-indicator-ring-duration,var(--spectrum-coach-animation-indicator-ring-duration))*var(--mod-coach-indicator-inner-animation-delay-multiple,var(--spectrum-coach-indicator-inner-animation-delay-multiple)))}.ring:nth-child(2){animation-delay:calc(var(--mod-coach-animation-indicator-ring-duration,var(--spectrum-coach-animation-indicator-ring-duration))*var(--mod-coach-animation-indicator-ring-center-delay-multiple,var(--spectrum-coach-animation-indicator-ring-center-delay-multiple)))}.ring:nth-child(3){animation-delay:calc(var(--mod-coach-animation-indicator-ring-duration,var(--spectrum-coach-animation-indicator-ring-duration))*var(--mod-coach-animation-indicator-ring-outer-delay-multiple,var(--spectrum-coach-animation-indicator-ring-outer-delay-multiple)))}:host([static-color=white]) .ring{border-color:var(--mod-coach-indicator-ring-light-color,var(--spectrum-coach-indicator-ring-light-color))}:host([static-color=black]) .ring{border-color:var(--mod-coach-indicator-ring-dark-color,var(--spectrum-coach-indicator-ring-dark-color))}@media (prefers-reduced-motion:reduce){.ring{animation:none}}@keyframes pulse{0%{transform:scale(var(--spectrum-coach-indicator-animation-keyframe-0-scale));opacity:var(--spectrum-coach-indicator-animation-keyframe-0-opacity)}50%{transform:scale(var(--spectrum-coach-indicator-animation-keyframe-50-scale));opacity:var(--spectrum-coach-indicator-animation-keyframe-50-opacity)}to{transform:scale(var(--spectrum-coach-indicator-animation-keyframe-100-scale));opacity:var(--spectrum-coach-indicator-animation-keyframe-100-opacity)}}@keyframes pulse-quiet{0%{transform:scale(var(--spectrum-coach-indicator-quiet-animation-keyframe-0-scale));opacity:var(--spectrum-coach-indicator-animation-keyframe-0-opacity)}50%{transform:scale(var(--spectrum-coach-indicator-animation-keyframe-50-scale));opacity:var(--spectrum-coach-indicator-animation-keyframe-50-opacity)}to{transform:scale(var(--spectrum-coach-indicator-animation-keyframe-100-scale));opacity:var(--spectrum-coach-indicator-animation-keyframe-100-opacity)}}:host{--spectrum-coach-indicator-ring-border-size:var(--system-coach-indicator-ring-border-size);--spectrum-coach-indicator-min-inline-size:var(--system-coach-indicator-min-inline-size);--spectrum-coach-indicator-min-block-size:var(--system-coach-indicator-min-block-size);--spectrum-coach-indicator-inline-size:var(--system-coach-indicator-inline-size);--spectrum-coach-indicator-block-size:var(--system-coach-indicator-block-size);--spectrum-coach-indicator-ring-inline-size:var(--system-coach-indicator-ring-inline-size);--spectrum-coach-indicator-ring-block-size:var(--system-coach-indicator-ring-block-size);--spectrum-coach-indicator-ring-dark-color:var(--system-coach-indicator-ring-dark-color);--spectrum-coach-indicator-ring-light-color:var(--system-coach-indicator-ring-light-color);--spectrum-coach-indicator-top:var(--system-coach-indicator-top);--spectrum-coach-indicator-left:var(--system-coach-indicator-left);--spectrum-coach-animation-indicator-ring-duration:var(--system-coach-indicator-coach-animation-indicator-ring-duration);--spectrum-coach-animation-indicator-ring-inner-delay-multiple:var(--system-coach-indicator-coach-animation-indicator-ring-inner-delay-multiple);--spectrum-coach-animation-indicator-ring-center-delay-multiple:var(--system-coach-indicator-coach-animation-indicator-ring-center-delay-multiple);--spectrum-coach-animation-indicator-ring-outer-delay-multiple:var(--system-coach-indicator-coach-animation-indicator-ring-outer-delay-multiple);--spectrum-coach-indicator-quiet-animation-ring-inner-delay-multiple:var(--system-coach-indicator-quiet-animation-ring-inner-delay-multiple);--spectrum-coach-indicator-animation-name:var(--system-coach-indicator-animation-name);--spectrum-coach-indicator-inner-animation-delay-multiple:var(--system-coach-indicator-inner-animation-delay-multiple);--spectrum-coach-indicator-animation-keyframe-0-scale:var(--system-coach-indicator-animation-keyframe-0-scale);--spectrum-coach-indicator-animation-keyframe-0-opacity:var(--system-coach-indicator-animation-keyframe-0-opacity);--spectrum-coach-indicator-animation-keyframe-50-scale:var(--system-coach-indicator-animation-keyframe-50-scale);--spectrum-coach-indicator-animation-keyframe-50-opacity:var(--system-coach-indicator-animation-keyframe-50-opacity);--spectrum-coach-indicator-animation-keyframe-100-scale:var(--system-coach-indicator-animation-keyframe-100-scale);--spectrum-coach-indicator-animation-keyframe-100-opacity:var(--system-coach-indicator-animation-keyframe-100-opacity);--spectrum-coach-indicator-quiet-animation-keyframe-0-scale:var(--system-coach-indicator-quiet-animation-keyframe-0-scale)}:host([quiet]){--spectrum-coach-indicator-quiet-ring-diameter-size:var(--system-coach-indicator-quiet-quiet-ring-diameter-size);--spectrum-coach-indicator-animation-name:var(--system-coach-indicator-quiet-animation-name)}:host{display:inline-block}
`;

var u=Object.defineProperty;var c=(l,t,i,r)=>{for(var e=void 0,s=l.length-1,o;s>=0;s--)(o=l[s])&&(e=(o(t,i,e))||e);return e&&u(t,i,e),e};class CoachIndicator extends SpectrumElement{constructor(){super(...arguments);this.quiet=!1;}static get styles(){return [a]}render(){return x`
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
        `}}c([n({type:Boolean,reflect:!0})],CoachIndicator.prototype,"quiet"),c([n({reflect:!0,attribute:"static-color"})],CoachIndicator.prototype,"staticColor");

defineElement("sp-coach-indicator",CoachIndicator);
