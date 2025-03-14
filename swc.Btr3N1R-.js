import{i as t}from"./swc.Cl2X6-fK.js";import{f as o}from"./swc.CBXJ4PuA.js";import{D as i}from"./swc.Bj4ZbN33.js";import{S as p}from"./swc.BLfCo0Z1.js";import{x as e}from"./swc.BkWj9Vim.js";import{o as r}from"./swc.CF8fRO5N.js";import{n as a}from"./swc.Cbbf2bfB.js";import{a as s}from"./swc.DeJGzahI.js";import{d as l}from"./swc.JlveB6nj.js";import"./swc.CzhnBuEY.js";const n=t`
    #tooltip{pointer-events:none;visibility:hidden;opacity:0;transition:transform .13s ease-in-out,opacity .13s ease-in-out,visibility 0s linear .13s;transition:transform var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))ease-in-out,opacity var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))ease-in-out,visibility 0s linear var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))}:host([open]) #tooltip{pointer-events:auto;visibility:visible;opacity:1;transition-delay:0s;transition-delay:var(--mod-overlay-animation-duration-opened,var(--spectrum-animation-duration-0,0s))}@media (forced-colors:active){#tooltip{border:1px solid #0000}#tip{--highcontrast-tooltip-background-color-default:CanvasText;--highcontrast-tooltip-background-color-informative:CanvasText;--highcontrast-tooltip-background-color-positive:CanvasText;--highcontrast-tooltip-background-color-negative:CanvasText;forced-color-adjust:none}}#tooltip{box-sizing:border-box;vertical-align:top;inline-size:auto;padding-inline:var(--mod-tooltip-spacing-inline,var(--spectrum-tooltip-spacing-inline));border-radius:var(--mod-tooltip-border-radius,var(--spectrum-tooltip-border-radius));block-size:auto;min-block-size:var(--mod-tooltip-height,var(--spectrum-tooltip-height));max-inline-size:var(--mod-tooltip-max-inline-size,var(--spectrum-tooltip-max-inline-size));background-color:var(--highcontrast-tooltip-background-color-default,var(--mod-tooltip-background-color-default,var(--spectrum-tooltip-background-color-default)));color:var(--mod-tooltip-content-color,var(--spectrum-tooltip-content-color));font-size:var(--mod-tooltip-font-size,var(--spectrum-tooltip-font-size));font-weight:var(--mod-tooltip-font-weight,var(--spectrum-tooltip-font-weight));line-height:var(--mod-tooltip-line-height,var(--spectrum-tooltip-line-height));word-break:break-word;-webkit-font-smoothing:antialiased;cursor:default;-webkit-user-select:none;user-select:none;flex-direction:row;align-items:center;display:inline-flex;position:relative}:host(:lang(ja)) #tooltip,:host(:lang(ko)) #tooltip,:host(:lang(zh)) #tooltip{line-height:var(--mod-tooltip-cjk-line-height,var(--spectrum-tooltip-cjk-line-height))}#tooltip p{margin:0}:host([variant=info]) #tooltip{background-color:var(--highcontrast-tooltip-background-color-informative,var(--mod-tooltip-background-color-informative,var(--spectrum-tooltip-background-color-informative)))}:host([variant=positive]) #tooltip{background-color:var(--highcontrast-tooltip-background-color-positive,var(--mod-tooltip-background-color-positive,var(--spectrum-tooltip-background-color-positive)))}:host([variant=negative]) #tooltip{background-color:var(--highcontrast-tooltip-background-color-negative,var(--mod-tooltip-background-color-negative,var(--spectrum-tooltip-background-color-negative)))}#tip{block-size:var(--mod-tooltip-tip-square-size,var(--spectrum-tooltip-tip-square-size));inline-size:var(--mod-tooltip-tip-square-size,var(--spectrum-tooltip-tip-square-size));background-color:var(--highcontrast-tooltip-background-color-default,var(--mod-tooltip-background-color-default,var(--spectrum-tooltip-background-color-default)));clip-path:polygon(0 calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset))),50% var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage)),100% calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset))));inset-block-start:100%;position:absolute;left:50%;transform:translate(-50%)}:host([variant=info]) #tooltip #tip{background-color:var(--highcontrast-tooltip-background-color-informative,var(--mod-tooltip-background-color-informative,var(--spectrum-tooltip-background-color-informative)))}:host([variant=positive]) #tooltip #tip{background-color:var(--highcontrast-tooltip-background-color-positive,var(--mod-tooltip-background-color-positive,var(--spectrum-tooltip-background-color-positive)))}:host([variant=negative]) #tooltip #tip{background-color:var(--highcontrast-tooltip-background-color-negative,var(--mod-tooltip-background-color-negative,var(--spectrum-tooltip-background-color-negative)))}:host([placement*=top]) #tooltip #tip,.spectrum-Tooltip--top-end #tip,.spectrum-Tooltip--top-left #tip,.spectrum-Tooltip--top-right #tip,.spectrum-Tooltip--top-start #tip{inset-block-start:100%}:host([placement*=bottom]) #tooltip #tip,.spectrum-Tooltip--bottom-end #tip,.spectrum-Tooltip--bottom-left #tip,.spectrum-Tooltip--bottom-right #tip,.spectrum-Tooltip--bottom-start #tip{clip-path:polygon(50% calc(100% - var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage))),0 calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset))),100% calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset))));inset-block:auto 100%}.spectrum-Tooltip--bottom-end #tip,.spectrum-Tooltip--bottom-left #tip,.spectrum-Tooltip--bottom-right #tip,.spectrum-Tooltip--bottom-start #tip,.spectrum-Tooltip--top-end #tip,.spectrum-Tooltip--top-left #tip,.spectrum-Tooltip--top-right #tip,.spectrum-Tooltip--top-start #tip{transform:none}.spectrum-Tooltip--bottom-left #tip,.spectrum-Tooltip--top-left #tip{inset-inline-start:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))}.spectrum-Tooltip--bottom-right #tip,.spectrum-Tooltip--top-right #tip{inset-inline:auto var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))}.spectrum-Tooltip--bottom-start #tip,.spectrum-Tooltip--top-start #tip{inset-inline:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))auto}.spectrum-Tooltip--bottom-start #tip:dir(rtl),.spectrum-Tooltip--top-start #tip:dir(rtl),:host([dir=rtl]) .spectrum-Tooltip--bottom-start #tip,:host([dir=rtl]) .spectrum-Tooltip--top-start #tip{right:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing));left:auto}.spectrum-Tooltip--bottom-end #tip,.spectrum-Tooltip--top-end #tip{inset-inline:auto var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))}.spectrum-Tooltip--bottom-end #tip:dir(rtl),.spectrum-Tooltip--top-end #tip:dir(rtl),:host([dir=rtl]) .spectrum-Tooltip--bottom-end #tip,:host([dir=rtl]) .spectrum-Tooltip--top-end #tip{left:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing));right:auto}.spectrum-Tooltip--end #tip,.spectrum-Tooltip--end-bottom #tip,.spectrum-Tooltip--end-top #tip,:host([placement*=left]) #tooltip #tip,.spectrum-Tooltip--left-bottom #tip,.spectrum-Tooltip--left-top #tip,:host([placement*=right]) #tooltip #tip,.spectrum-Tooltip--right-bottom #tip,.spectrum-Tooltip--right-top #tip,.spectrum-Tooltip--start #tip,.spectrum-Tooltip--start-bottom #tip,.spectrum-Tooltip--start-top #tip{inset-block-start:50%;transform:translateY(-50%)}.spectrum-Tooltip--end-bottom #tip,.spectrum-Tooltip--end-top #tip,.spectrum-Tooltip--left-bottom #tip,.spectrum-Tooltip--left-top #tip,.spectrum-Tooltip--right-bottom #tip,.spectrum-Tooltip--right-top #tip,.spectrum-Tooltip--start-bottom #tip,.spectrum-Tooltip--start-top #tip{inset-block-start:auto;transform:none}.spectrum-Tooltip--end #tip,.spectrum-Tooltip--end-bottom #tip,.spectrum-Tooltip--end-top #tip,:host([placement*=right]) #tooltip #tip,.spectrum-Tooltip--right-bottom #tip,.spectrum-Tooltip--right-top #tip{clip-path:polygon(calc(100% - var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage)))50%,calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))100%,calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))0);inset-inline:auto 100%}:host([placement*=left]) #tooltip #tip,.spectrum-Tooltip--left-bottom #tip,.spectrum-Tooltip--left-top #tip,.spectrum-Tooltip--start #tip,.spectrum-Tooltip--start-bottom #tip,.spectrum-Tooltip--start-top #tip{clip-path:polygon(calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))0,calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))100%,var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage))50%);inset-inline-start:100%}.spectrum-Tooltip--end-top #tip,.spectrum-Tooltip--left-top #tip,.spectrum-Tooltip--right-top #tip,.spectrum-Tooltip--start-top #tip{inset-block-start:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))}.spectrum-Tooltip--end-bottom #tip,.spectrum-Tooltip--left-bottom #tip,.spectrum-Tooltip--right-bottom #tip,.spectrum-Tooltip--start-bottom #tip{inset-block-end:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))}.spectrum-Tooltip--end #tip:dir(rtl),.spectrum-Tooltip--end-bottom #tip:dir(rtl),.spectrum-Tooltip--end-top #tip:dir(rtl),:host([placement*=left]) #tooltip #tip:dir(rtl),.spectrum-Tooltip--left-bottom #tip:dir(rtl),.spectrum-Tooltip--left-top #tip:dir(rtl),:host([dir=rtl]) .spectrum-Tooltip--end #tip,:host([dir=rtl]) .spectrum-Tooltip--end-bottom #tip,:host([dir=rtl]) .spectrum-Tooltip--end-top #tip,:host([dir=rtl][placement*=left]) #tooltip #tip,:host([dir=rtl]) .spectrum-Tooltip--left-bottom #tip,:host([dir=rtl]) .spectrum-Tooltip--left-top #tip{clip-path:polygon(calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))0,calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))100%,var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage))50%);left:100%;right:auto}:host([placement*=right]) #tooltip #tip:dir(rtl),.spectrum-Tooltip--right-bottom #tip:dir(rtl),.spectrum-Tooltip--right-top #tip:dir(rtl),.spectrum-Tooltip--start #tip:dir(rtl),.spectrum-Tooltip--start-bottom #tip:dir(rtl),.spectrum-Tooltip--start-top #tip:dir(rtl),:host([dir=rtl][placement*=right]) #tooltip #tip,:host([dir=rtl]) .spectrum-Tooltip--right-bottom #tip,:host([dir=rtl]) .spectrum-Tooltip--right-top #tip,:host([dir=rtl]) .spectrum-Tooltip--start #tip,:host([dir=rtl]) .spectrum-Tooltip--start-bottom #tip,:host([dir=rtl]) .spectrum-Tooltip--start-top #tip{clip-path:polygon(var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage))50%,calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))100%,calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))0);left:auto;right:100%}::slotted([slot=icon]){inline-size:var(--mod-tooltip-icon-width,var(--spectrum-tooltip-icon-width));block-size:var(--mod-tooltip-icon-height,var(--spectrum-tooltip-icon-height));flex-shrink:0;align-self:flex-start;margin-block-start:var(--mod-tooltip-icon-spacing-block-start,var(--spectrum-tooltip-icon-spacing-block-start));margin-inline-start:calc(var(--mod-tooltip-icon-spacing-inline-start,var(--spectrum-tooltip-icon-spacing-inline-start)) - var(--mod-tooltip-spacing-inline,var(--spectrum-tooltip-spacing-inline)));margin-inline-end:var(--mod-tooltip-icon-spacing-inline-end,var(--spectrum-tooltip-icon-spacing-inline-end))}#label{line-height:var(--mod-tooltip-line-height,var(--spectrum-tooltip-line-height));margin-block-start:var(--mod-tooltip-spacing-block-start,var(--spectrum-tooltip-spacing-block-start));margin-block-end:var(--mod-tooltip-spacing-block-end,var(--spectrum-tooltip-spacing-block-end))}#tooltip,:host([placement*=top]) #tooltip,.spectrum-Tooltip--top-end,.spectrum-Tooltip--top-left,.spectrum-Tooltip--top-right,.spectrum-Tooltip--top-start{margin-block-end:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--top-end,:host([open]) .spectrum-Tooltip--top-left,:host([open]) .spectrum-Tooltip--top-right,:host([open]) .spectrum-Tooltip--top-start,:host([placement*=top][open]) #tooltip,:host([open]) #tooltip{transform:translateY(calc(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance))*-1))}:host([placement*=bottom]) #tooltip,.spectrum-Tooltip--bottom-end,.spectrum-Tooltip--bottom-left,.spectrum-Tooltip--bottom-right,.spectrum-Tooltip--bottom-start{margin-block-start:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--bottom-end,:host([open]) .spectrum-Tooltip--bottom-left,:host([open]) .spectrum-Tooltip--bottom-right,:host([open]) .spectrum-Tooltip--bottom-start,:host([placement*=bottom][open]) #tooltip{transform:translateY(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance)))}:host([placement*=right]) #tooltip,.spectrum-Tooltip--right-bottom,.spectrum-Tooltip--right-top{margin-left:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--right-bottom,:host([open]) .spectrum-Tooltip--right-top,:host([placement*=right][open]) #tooltip{transform:translateX(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance)))}:host([placement*=left]) #tooltip,.spectrum-Tooltip--left-bottom,.spectrum-Tooltip--left-top{margin-right:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--left-bottom,:host([open]) .spectrum-Tooltip--left-top,:host([placement*=left][open]) #tooltip{transform:translateX(calc(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance))*-1))}.spectrum-Tooltip--start,.spectrum-Tooltip--start-bottom,.spectrum-Tooltip--start-top{margin-inline-end:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--start-bottom,:host([open]) .spectrum-Tooltip--start-top,:host([open]) .spectrum-Tooltip--start{transform:translateX(calc(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance))*-1))}:host([open]) .spectrum-Tooltip--start-bottom:dir(rtl),:host([open]) .spectrum-Tooltip--start-top:dir(rtl),:host([open]) .spectrum-Tooltip--start:dir(rtl),:host([dir=rtl][open]) .spectrum-Tooltip--start-bottom,:host([dir=rtl][open]) .spectrum-Tooltip--start-top,:host([dir=rtl][open]) .spectrum-Tooltip--start{transform:translateX(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance)))}.spectrum-Tooltip--end,.spectrum-Tooltip--end-bottom,.spectrum-Tooltip--end-top{margin-inline-start:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--end-bottom,:host([open]) .spectrum-Tooltip--end-top,:host([open]) .spectrum-Tooltip--end{transform:translateX(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance)))}:host([open]) .spectrum-Tooltip--end-bottom:dir(rtl),:host([open]) .spectrum-Tooltip--end-top:dir(rtl),:host([open]) .spectrum-Tooltip--end:dir(rtl),:host([dir=rtl][open]) .spectrum-Tooltip--end-bottom,:host([dir=rtl][open]) .spectrum-Tooltip--end-top,:host([dir=rtl][open]) .spectrum-Tooltip--end{transform:translateX(calc(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance))*-1))}#tooltip{--spectrum-tooltip-backgound-color-default-neutral:var(--system-tooltip-backgound-color-default-neutral);--spectrum-tooltip-animation-duration:var(--system-tooltip-animation-duration);--spectrum-tooltip-margin:var(--system-tooltip-margin);--spectrum-tooltip-height:var(--system-tooltip-height);--spectrum-tooltip-max-inline-size:var(--system-tooltip-max-inline-size);--spectrum-tooltip-border-radius:var(--system-tooltip-border-radius);--spectrum-tooltip-icon-width:var(--system-tooltip-icon-width);--spectrum-tooltip-icon-height:var(--system-tooltip-icon-height);--spectrum-tooltip-font-size:var(--system-tooltip-font-size);--spectrum-tooltip-line-height:var(--system-tooltip-line-height);--spectrum-tooltip-cjk-line-height:var(--system-tooltip-cjk-line-height);--spectrum-tooltip-font-weight:var(--system-tooltip-font-weight);--spectrum-tooltip-spacing-inline:var(--system-tooltip-spacing-inline);--spectrum-tooltip-spacing-block-start:var(--system-tooltip-spacing-block-start);--spectrum-tooltip-spacing-block-end:var(--system-tooltip-spacing-block-end);--spectrum-tooltip-icon-spacing-inline-start:var(--system-tooltip-icon-spacing-inline-start);--spectrum-tooltip-icon-spacing-inline-end:var(--system-tooltip-icon-spacing-inline-end);--spectrum-tooltip-icon-spacing-block-start:var(--system-tooltip-icon-spacing-block-start);--spectrum-tooltip-background-color-informative:var(--system-tooltip-background-color-informative);--spectrum-tooltip-background-color-positive:var(--system-tooltip-background-color-positive);--spectrum-tooltip-background-color-negative:var(--system-tooltip-background-color-negative);--spectrum-tooltip-content-color:var(--system-tooltip-content-color);--spectrum-tooltip-tip-inline-size:var(--system-tooltip-tip-inline-size);--spectrum-tooltip-tip-block-size:var(--system-tooltip-tip-block-size);--spectrum-tooltip-tip-square-size:var(--system-tooltip-tip-square-size);--spectrum-tooltip-tip-height-percentage:var(--system-tooltip-tip-height-percentage);--spectrum-tooltip-tip-antialiasing-inset:var(--system-tooltip-tip-antialiasing-inset);--spectrum-tooltip-pointer-corner-spacing:var(--system-tooltip-pointer-corner-spacing);--spectrum-tooltip-background-color-default:var(--system-tooltip-background-color-default)}:host{display:contents}#tooltip{width:fit-content;white-space:initial;max-width:var(--spectrum-tooltip-max-inline-size)}#tip{clip-path:polygon(0 -5%,50% 50%,100% -5%);width:var(--spectrum-tooltip-tip-inline-size)!important;height:var(--spectrum-tooltip-tip-inline-size)!important}#tip[style]{transform:none!important}:host(:not([placement*=top])) #tooltip{margin-bottom:0}:host([placement*=top]) #tooltip #tip{inset-block-start:100%}:host([placement*=bottom]) #tooltip #tip{clip-path:polygon(50% 50%,0 105%,100% 105%);inset-block-end:100%;top:auto}:host([placement*=left]) #tooltip #tip,:host([placement*=right]) #tooltip #tip{inset-block-start:50%;transform:translateY(-50%)}:host([placement*=right]) #tooltip #tip{clip-path:polygon(50% 50%,105% 100%,105% 0);inset-inline:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size))*-2)100%}:host([placement*=left]) #tooltip #tip{clip-path:polygon(-5% 0,-5% 100%,50% 50%);inset-inline-start:100%}sp-overlay:not(:defined){display:none}
`;var c=Object.defineProperty,m=Object.getOwnPropertyDescriptor,d=(t,o,i,p)=>{for(var e,r=p>1?void 0:p?m(o,i):o,a=t.length-1;a>=0;a--)(e=t[a])&&(r=(p?e(o,i,r):e(r))||r);return p&&r&&c(o,i,r),r};class u extends HTMLElement{constructor(){super(),this._open=!1,this._placement="top",this.addEventListener("sp-opened",this.redispatchEvent),this.addEventListener("sp-closed",this.redispatchEvent)}redispatchEvent(t){t.stopPropagation(),this.tooltip.dispatchEvent(new CustomEvent(t.type,{bubbles:t.bubbles,composed:t.composed,detail:t.detail}))}get tooltip(){return this.getRootNode().host}static get observedAttributes(){return["open","placement"]}attributeChangedCallback(t,o,i){switch(t){case"open":this.open=null!==i;break;case"placement":this.placement=i}}set open(t){this._open=t;const{tooltip:o}=this;o&&(o.open=t)}get open(){return this._open}set placement(t){this._placement=t;const{tooltip:o}=this;o&&(o.placement=t)}get placement(){return this._placement}get tipElement(){return this.tooltip.tipElement}}customElements.get("sp-tooltip-openable")||customElements.define("sp-tooltip-openable",u);class h extends p{constructor(){super(...arguments),this.delayed=!1,this.dependencyManager=new i(this),this.disabled=!1,this.selfManaged=!1,this.offset=0,this.open=!1,this._variant="",this.handleOpenOverlay=()=>{this.open=!0},this.handleCloseOverlay=()=>{this.open=!1}}static get styles(){return[n]}get variant(){return this._variant}set variant(t){if(t!==this.variant){if(["info","positive","negative"].includes(t))return this.setAttribute("variant",t),void(this._variant=t);this.removeAttribute("variant"),this._variant=""}}forwardTransitionEvent(t){this.dispatchEvent(new TransitionEvent(t.type,{bubbles:!0,composed:!0,propertyName:t.propertyName}))}get triggerElement(){var t;let i=this.assignedSlot||this,p=i.getRootNode();if(p===document)return null;let e=i.parentElement||p.host||p;for(;null==(t=null==e?void 0:e.matches)||!t.call(e,o);){if(i=e.assignedSlot||e,p=i.getRootNode(),p===document)return null;e=i.parentElement||p.host||p}return e}render(){const t=e`
            <sp-tooltip-openable
                id="tooltip"
                placement=${r(this.placement)}
                @transitionrun=${this.forwardTransitionEvent}
                @transitionend=${this.forwardTransitionEvent}
                @transitioncancel=${this.forwardTransitionEvent}
            >
                <slot name="icon"></slot>
                <span id="label"><slot></slot></span>
                <span id="tip" aria-hidden="true"></span>
            </sp-tooltip-openable>
        `;return this.selfManaged?(this.dependencyManager.add("sp-overlay"),import("./swc.BYs1K3mL.js"),e`
                <sp-overlay
                    ?open=${this.open&&!this.disabled&&this.dependencyManager.loaded}
                    ?delayed=${this.delayed}
                    ?disabled=${this.disabled}
                    offset=${this.offset}
                    .placement=${this.placement}
                    type="hint"
                    .tipPadding=${this.tipPadding}
                    .triggerInteraction=${"hover"}
                    @sp-opened=${this.handleOpenOverlay}
                    @sp-closed=${this.handleCloseOverlay}
                >
                    ${t}
                </sp-overlay>
            `):t}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{if(!this.selfManaged)return;const t=this.overlayElement;if(t){const o=this.triggerElement;t.triggerElement=o}}))}}d([a({type:Boolean})],h.prototype,"delayed",2),d([a({type:Boolean})],h.prototype,"disabled",2),d([a({type:Boolean,attribute:"self-managed"})],h.prototype,"selfManaged",2),d([a({type:Number})],h.prototype,"offset",2),d([a({type:Boolean,reflect:!0})],h.prototype,"open",2),d([s("sp-overlay")],h.prototype,"overlayElement",2),d([a({reflect:!0})],h.prototype,"placement",2),d([s("#tip")],h.prototype,"tipElement",2),d([a({type:Number})],h.prototype,"tipPadding",2),d([a({type:String})],h.prototype,"variant",1),l("sp-tooltip",h);
//# sourceMappingURL=swc.BdQGw_SM.js.map
