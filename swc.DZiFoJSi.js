import{a as s}from"./swc.CX6k5fjN.js";import{s as t,x as e}from"./swc.BkWj9Vim.js";import"./swc.BYs1K3mL.js";import"./swc.BJPRCu7J.js";import"./swc.FxtnyBMY.js";import"./swc.DLCFGFpF.js";import{i as o}from"./swc.Cl2X6-fK.js";import{a as i}from"./swc.DeJGzahI.js";import{n as r}from"./swc.Cbbf2bfB.js";import{t as n}from"./swc.DPA-v8JJ.js";import"./swc.JlveB6nj.js";import"./swc.CdA8dRlX.js";import"./swc.BlIgIdkB.js";import"./swc.Bs8cprZZ.js";import"./swc.DNk4rYoy.js";import"./swc.D1tPGqVW.js";import"./swc.BLfCo0Z1.js";import"./swc.CzhnBuEY.js";import"./swc.D_As-1mY.js";import"./swc.C-4VxDS_.js";import"./swc.CBXJ4PuA.js";import"./swc.mUX8iMJZ.js";import"./swc.sHGJnUZ4.js";import"./swc.8Y9xgsp7.js";import"./swc.9Yzx-IXX.js";import"./swc.DyUZL4_b.js";import"./swc.CF8fRO5N.js";import"./swc.UNif06S0.js";import"./swc.CmeVTBov.js";import"./swc.P1k04TYq.js";import"./swc.aQyAGHrp.js";import"./swc.BuhQgv07.js";import"./swc.CdEVnH1e.js";import"./swc.BkNr85_9.js";import"./swc.DuRNRohl.js";import"./swc.Beb8Upzl.js";import"./swc.fxarMd8g.js";import"./swc.Czk9q1Ly.js";import"./swc.CJygKO7k.js";import"./swc.Chur2OTv.js";import"./swc.D2YQjEpb.js";import"./swc.B02NpYXx.js";import"./swc.DUjeK72s.js";import"./swc.DB6_-2f4.js";import"./swc.BGFXP_Ok.js";import"./swc.Dh3FYz02.js";import"./swc.CpQizWLm.js";var a=o`:host{display:block}sp-search{width:100%;--spectrum-alias-single-line-width:100%}#search-results-menu{width:250px;max-height:calc(100vh - 200px);flex-direction:column;display:flex}sp-illustrated-message{color:var(--spectrum-gray-800);flex:1;margin-bottom:2em}`,c=s=>s.stopPropagation(),p=class extends t{constructor(){super(...arguments),this.open=!1,this.results=[]}static get styles(){return[a]}focus(){this.searchField.focus()}handleSearchPointerdown(){const s=new AbortController,{signal:t}=s,e=()=>s.abort();this.searchField.addEventListener("pointerup",(()=>{this.overlayEl.manuallyKeepOpen()}),{signal:t}),document.addEventListener("pointerup",e,{signal:t}),document.addEventListener("pointercancel",e,{signal:t})}handleKeydown(s){const{code:t}=s,e="ArrowDown"===t||"ArrowUp"===t;e&&(s.preventDefault(),this.focusResults({shouldFocusResultsList:e}))}async focusResults({shouldFocusResultsList:s}){s?(this.menuEl.addEventListener("focus",(()=>{this.menuEl.childItems[this.menuEl.focusedItemIndex].focused=!0}),{once:!0}),this.menuEl.focus()):this.popoverEl.focus()}openPopover(){this.open=!0}closePopover(){this.open=!1}handleSubmit(s){s.preventDefault(),this.results.length<0||this.menuEl.focus()}async updateSearchResults(){const{value:s}=this.searchField;if(s.length<3||!this.searchField.focused)return this.closePopover(),!1;const t=`${s.trim()}*`,e=await import("./swc.CqRT3A0W.js").then((({search:s})=>s));return this.results=await e(t),this.openPopover(),this.results.length>0}handleMenuFocusout(s){this.menuEl.contains(s.relatedTarget)||this.menuEl.childItems.forEach((s=>{s.focused=!1}))}renderResults(){return this.results.length>0?e`<sp-menu tabindex="-1" @focusout="${this.handleMenuFocusout}">${this.results.map((s=>e`<sp-menu-group><span slot="header">${s.name}</span> ${s.results.map((s=>e`<sp-menu-item href="${s.url}">${s.label}</sp-menu-item>`))}</sp-menu-group>`))}</sp-menu>`:e`<sp-illustrated-message heading="No results found" description="Try another search term."></sp-illustrated-message>`}render(){return e`<div id="search-container"><sp-search id="search" @pointerdown="${this.handleSearchPointerdown}" @focusin="${this.updateSearchResults}" @input="${this.updateSearchResults}" @change="${this.updateSearchResults}" @keydown="${this.handleKeydown}" @click="${c}" @submit="${this.handleSubmit}" autocomplete="off"></sp-search><sp-overlay ?open="${this.open}" placement="bottom-start" receives-focus="false" trigger="search" type="auto"><sp-popover id="search-results-menu">${this.renderResults()}</sp-popover></sp-overlay></div>`}firstUpdated(s){super.firstUpdated(s),this.addEventListener("blur",this.closePopover)}};s([i("sp-menu")],p.prototype,"menuEl",2),s([r({type:Boolean})],p.prototype,"open",2),s([i("sp-overlay")],p.prototype,"overlayEl",2),s([i("sp-popover")],p.prototype,"popoverEl",2),s([i("sp-search")],p.prototype,"searchField",2),s([r({type:Array})],p.prototype,"results",2),p=s([n("docs-search")],p);var l=o`::slotted(*){width:100%}aside{max-height:100vh;height:100vh;background-color:var(--spectrum-gray-75);flex-direction:column;display:flex;position:sticky;top:0;left:0;overflow:auto}@media screen and (max-width:960px){aside{transition:transform var(--spectrum-dialog-confirm-background-entry-animation-duration,var(--spectrum-animation-duration-600)) cubic-bezier(0,0,.4,1),visibility 0s linear var(--spectrum-animation-duration-600);z-index:10;min-height:100vh;visibility:hidden;position:fixed;top:0;left:0;transform:translate(-100%)}[dir=rtl]+aside{visibility:hidden;left:auto;right:0;transform:translate(100%)}:host([open]) aside{visibility:visible;transition-delay:0s,0s;transform:translate(0)}.scrim{z-index:10;touch-action:none}}#nav-header a,#nav-header a:visited{color:var(--spectrum-gray-800);text-decoration:none}.navigation{width:calc(var(--swc-scale-factor)*240px - 48px);flex:1;padding:0 24px 24px;overflow:hidden auto}docs-spectrum-logo{width:36px;height:32px;padding-top:7px;display:block}:host([dir=ltr]) docs-spectrum-logo{margin-right:16px}:host([dir=rtl]) docs-spectrum-logo{margin-left:16px}#logo-container{border-radius:4px;outline:0}docs-search{width:calc(var(--swc-scale-factor)*192px);padding:0 calc(var(--swc-scale-factor)*24px) calc(var(--swc-scale-factor)*24px) calc(var(--swc-scale-factor)*24px)}sp-sidenav{width:100%}.spectrum-web{margin-top:80px;display:block}sp-underlay:not(:defined){opacity:0}`,d=class extends t{constructor(){super(...arguments),this.open=!1,this.isNarrow=!1}static get styles(){return[l]}toggle(){this.open=!this.open}focus(){const s=document.querySelector('[slot="logo"]');s?s.focus():this.shadowRoot.querySelector("#logo").focus()}handleTransitionEvent(s){this.dispatchEvent(new TransitionEvent(s.type))}render(){return e`${this.isNarrow?e`<sp-underlay class="scrim" @close="${this.toggle}" ?open="${this.open}" @transitionrun="${this.handleTransitionEvent}" @transitionend="${this.handleTransitionEvent}" @transitioncancel="${this.handleTransitionEvent}"></sp-underlay>`:e``}<aside @transitionrun="${this.handleTransitionEvent}" @transitionend="${this.handleTransitionEvent}" @transitioncancel="${this.handleTransitionEvent}"><div id="nav-header"><div id="logo-container"><slot name="logo"></slot></div><docs-search></docs-search></div><div class="navigation"><slot></slot></div></aside>`}updated(s){s.has("open")&&!this.open&&s.get("open")&&this.dispatchEvent(new Event("close",{bubbles:!0}))}};s([r({type:Boolean,reflect:!0})],d.prototype,"open",2),s([r({type:Boolean})],d.prototype,"isNarrow",2),d=s([n("docs-side-nav")],d);export{d as SideNav};
//# sourceMappingURL=swc.CRW1uH6f.js.map
