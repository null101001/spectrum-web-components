import { i } from './lit-element-BulMEkr1.js';
import { R as RovingTabindexController } from './RovingTabindex-BIFuw_W7.js';
import { S as SizedMixin } from './sizedMixin-D4VoaNlz.js';
import { S as SpectrumElement, n, d as defineElement } from './define-element-2VgsDjbW.js';
import { x } from './lit-html-COgVUehj.js';
import { e } from './query-DQF6X5qW.js';

const t=i`
    :host{--spectrum-menu-item-background-color-hover:var(--system-menu-item-background-color-hover);--spectrum-menu-item-background-color-down:var(--system-menu-item-background-color-down);--spectrum-menu-item-background-color-key-focus:var(--system-menu-item-background-color-key-focus);--spectrum-menu-item-corner-radius:var(--system-menu-item-corner-radius);--spectrum-menu-item-focus-indicator-shadow:var(--system-menu-item-focus-indicator-shadow);--spectrum-menu-item-focus-indicator-offset:var(--system-menu-item-focus-indicator-offset);--spectrum-menu-item-spacing-multiplier:var(--system-menu-item-spacing-multiplier);--spectrum-menu-item-focus-indicator-outline-style:var(--system-menu-item-focus-indicator-outline-style)}@media (forced-colors:active){:host{--highcontrast-menu-item-background-color-default:ButtonFace;--highcontrast-menu-item-color-default:ButtonText;--highcontrast-menu-item-background-color-focus:Highlight;--highcontrast-menu-item-color-focus:HighlightText;--highcontrast-menu-checkmark-icon-color-default:Highlight;--highcontrast-menu-item-color-disabled:GrayText;--highcontrast-menu-item-focus-indicator-color:Highlight;--highcontrast-menu-item-selected-background-color:Highlight;--highcontrast-menu-item-selected-color:HighlightText}@supports (color:SelectedItem){:host{--highcontrast-menu-item-selected-background-color:SelectedItem;--highcontrast-menu-item-selected-color:SelectedItemText}}}:host{--spectrum-menu-item-top-to-action:var(--spectrum-spacing-50);--spectrum-menu-item-top-to-checkbox:var(--spectrum-spacing-50);--spectrum-menu-item-label-line-height:var(--spectrum-line-height-100);--spectrum-menu-item-label-line-height-cjk:var(--spectrum-cjk-line-height-100);--spectrum-menu-item-label-to-description-spacing:var(--spectrum-menu-item-label-to-description);--spectrum-menu-item-focus-indicator-width:var(--mod-menu-item-focus-indicator-width,var(--spectrum-border-width-200));--spectrum-menu-item-focus-indicator-color:var(--spectrum-blue-800);--spectrum-menu-item-label-to-value-area-min-spacing:var(--spectrum-spacing-100);--spectrum-menu-item-label-content-color-default:var(--spectrum-neutral-content-color-default);--spectrum-menu-item-label-content-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-menu-item-label-content-color-down:var(--spectrum-neutral-content-color-down);--spectrum-menu-item-label-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-menu-item-label-icon-color-default:var(--spectrum-neutral-content-color-default);--spectrum-menu-item-label-icon-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-menu-item-label-icon-color-down:var(--spectrum-neutral-content-color-down);--spectrum-menu-item-label-icon-color-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-menu-item-label-content-color-disabled:var(--spectrum-disabled-content-color);--spectrum-menu-item-label-icon-color-disabled:var(--spectrum-disabled-content-color);--spectrum-menu-item-description-line-height:var(--spectrum-line-height-100);--spectrum-menu-item-description-line-height-cjk:var(--spectrum-cjk-line-height-100);--spectrum-menu-item-description-color-default:var(--spectrum-neutral-subdued-content-color-default);--spectrum-menu-item-description-color-hover:var(--spectrum-neutral-subdued-content-color-hover);--spectrum-menu-item-description-color-down:var(--spectrum-neutral-subdued-content-color-down);--spectrum-menu-item-description-color-focus:var(--spectrum-neutral-subdued-content-color-key-focus);--spectrum-menu-item-description-color-disabled:var(--spectrum-disabled-content-color);--spectrum-menu-section-header-line-height:var(--spectrum-line-height-100);--spectrum-menu-section-header-line-height-cjk:var(--spectrum-cjk-line-height-100);--spectrum-menu-section-header-font-weight:var(--spectrum-bold-font-weight);--spectrum-menu-section-header-color:var(--spectrum-gray-900);--spectrum-menu-collapsible-icon-color:var(--spectrum-gray-900);--spectrum-menu-checkmark-icon-color-default:var(--spectrum-accent-color-900);--spectrum-menu-checkmark-icon-color-hover:var(--spectrum-accent-color-1000);--spectrum-menu-checkmark-icon-color-down:var(--spectrum-accent-color-1100);--spectrum-menu-checkmark-icon-color-focus:var(--spectrum-accent-color-1000);--spectrum-menu-drillin-icon-color-default:var(--spectrum-neutral-subdued-content-color-default);--spectrum-menu-drillin-icon-color-hover:var(--spectrum-neutral-subdued-content-color-hover);--spectrum-menu-drillin-icon-color-down:var(--spectrum-neutral-subdued-content-color-down);--spectrum-menu-drillin-icon-color-focus:var(--spectrum-neutral-subdued-content-color-key-focus);--spectrum-menu-item-value-color-default:var(--spectrum-neutral-subdued-content-color-default);--spectrum-menu-item-value-color-hover:var(--spectrum-neutral-subdued-content-color-hover);--spectrum-menu-item-value-color-down:var(--spectrum-neutral-subdued-content-color-down);--spectrum-menu-item-value-color-focus:var(--spectrum-neutral-subdued-content-color-key-focus);--spectrum-menu-checkmark-display-hidden:none;--spectrum-menu-checkmark-display-shown:block;--spectrum-menu-checkmark-display:var(--spectrum-menu-checkmark-display-shown);--spectrum-menu-item-min-height:var(--spectrum-component-height-100);--spectrum-menu-item-icon-height:var(--spectrum-workflow-icon-size-100);--spectrum-menu-item-icon-width:var(--spectrum-workflow-icon-size-100);--spectrum-menu-item-label-font-size:var(--spectrum-font-size-100);--spectrum-menu-item-label-text-to-visual:var(--spectrum-text-to-visual-100);--spectrum-menu-item-label-inline-edge-to-content:var(--spectrum-component-edge-to-text-100);--spectrum-menu-item-top-edge-to-text:var(--spectrum-component-top-to-text-100);--spectrum-menu-item-bottom-edge-to-text:var(--spectrum-component-bottom-to-text-100);--spectrum-menu-item-text-to-control:var(--spectrum-text-to-control-100);--spectrum-menu-item-description-font-size:var(--spectrum-font-size-75);--spectrum-menu-section-header-font-size:var(--spectrum-font-size-100);--spectrum-menu-section-header-min-width:var(--spectrum-component-height-100);--spectrum-menu-item-selectable-edge-to-text-not-selected:var(--spectrum-menu-item-selectable-edge-to-text-not-selected-medium);--spectrum-menu-item-checkmark-height:var(--spectrum-menu-item-checkmark-height-medium);--spectrum-menu-item-checkmark-width:var(--spectrum-menu-item-checkmark-width-medium);--spectrum-menu-item-top-to-checkmark:var(--spectrum-menu-item-top-to-selected-icon-medium);--spectrum-menu-back-icon-margin:var(--spectrum-navigational-indicator-top-to-back-icon-medium);--spectrum-menu-item-collapsible-no-icon-submenu-item-padding-x-start:calc(var(--spectrum-menu-item-label-inline-edge-to-content) + var(--spectrum-menu-item-checkmark-width) + var(--spectrum-menu-item-label-text-to-visual) + var(--spectrum-menu-item-focus-indicator-width));--spectrum-menu-item-focus-indicator-color-default:var(--highcontrast-menu-item-focus-indicator-color,var(--mod-menu-item-focus-indicator-color,var(--spectrum-menu-item-focus-indicator-color)));--spectrum-menu-item-focus-indicator-border-width:calc(var(--spectrum-menu-item-focus-indicator-width)*var(--spectrum-menu-item-focus-indicator-direction-scalar,1))}:host([size=s]){--spectrum-menu-item-min-height:var(--spectrum-component-height-75);--spectrum-menu-item-icon-height:var(--spectrum-workflow-icon-size-75);--spectrum-menu-item-icon-width:var(--spectrum-workflow-icon-size-75);--spectrum-menu-item-label-font-size:var(--spectrum-font-size-75);--spectrum-menu-item-label-text-to-visual:var(--spectrum-text-to-visual-75);--spectrum-menu-item-label-inline-edge-to-content:var(--spectrum-component-edge-to-text-75);--spectrum-menu-item-top-edge-to-text:var(--spectrum-component-top-to-text-75);--spectrum-menu-item-bottom-edge-to-text:var(--spectrum-component-bottom-to-text-75);--spectrum-menu-item-text-to-control:var(--spectrum-text-to-control-75);--spectrum-menu-item-description-font-size:var(--spectrum-font-size-50);--spectrum-menu-section-header-font-size:var(--spectrum-font-size-75);--spectrum-menu-section-header-min-width:var(--spectrum-component-height-75);--spectrum-menu-item-selectable-edge-to-text-not-selected:var(--spectrum-menu-item-selectable-edge-to-text-not-selected-small);--spectrum-menu-item-checkmark-height:var(--spectrum-menu-item-checkmark-height-small);--spectrum-menu-item-checkmark-width:var(--spectrum-menu-item-checkmark-width-small);--spectrum-menu-item-top-to-checkmark:var(--spectrum-menu-item-top-to-selected-icon-small);--spectrum-menu-back-icon-margin:var(--spectrum-navigational-indicator-top-to-back-icon-small)}:host([size=l]){--spectrum-menu-item-min-height:var(--spectrum-component-height-200);--spectrum-menu-item-icon-height:var(--spectrum-workflow-icon-size-200);--spectrum-menu-item-icon-width:var(--spectrum-workflow-icon-size-200);--spectrum-menu-item-label-font-size:var(--spectrum-font-size-200);--spectrum-menu-item-label-text-to-visual:var(--spectrum-text-to-visual-200);--spectrum-menu-item-label-inline-edge-to-content:var(--spectrum-component-edge-to-text-200);--spectrum-menu-item-top-edge-to-text:var(--spectrum-component-top-to-text-200);--spectrum-menu-item-bottom-edge-to-text:var(--spectrum-component-bottom-to-text-200);--spectrum-menu-item-text-to-control:var(--spectrum-text-to-control-200);--spectrum-menu-item-description-font-size:var(--spectrum-font-size-100);--spectrum-menu-section-header-font-size:var(--spectrum-font-size-200);--spectrum-menu-section-header-min-width:var(--spectrum-component-height-200);--spectrum-menu-item-selectable-edge-to-text-not-selected:var(--spectrum-menu-item-selectable-edge-to-text-not-selected-large);--spectrum-menu-item-checkmark-height:var(--spectrum-menu-item-checkmark-height-large);--spectrum-menu-item-checkmark-width:var(--spectrum-menu-item-checkmark-width-large);--spectrum-menu-item-top-to-checkmark:var(--spectrum-menu-item-top-to-selected-icon-large);--spectrum-menu-back-icon-margin:var(--spectrum-navigational-indicator-top-to-back-icon-large)}:host([size=xl]){--spectrum-menu-item-min-height:var(--spectrum-component-height-300);--spectrum-menu-item-icon-height:var(--spectrum-workflow-icon-size-300);--spectrum-menu-item-icon-width:var(--spectrum-workflow-icon-size-300);--spectrum-menu-item-label-font-size:var(--spectrum-font-size-300);--spectrum-menu-item-label-text-to-visual:var(--spectrum-text-to-visual-300);--spectrum-menu-item-label-inline-edge-to-content:var(--spectrum-component-edge-to-text-300);--spectrum-menu-item-top-edge-to-text:var(--spectrum-component-top-to-text-300);--spectrum-menu-item-bottom-edge-to-text:var(--spectrum-component-bottom-to-text-300);--spectrum-menu-item-text-to-control:var(--spectrum-text-to-control-300);--spectrum-menu-item-description-font-size:var(--spectrum-font-size-200);--spectrum-menu-section-header-font-size:var(--spectrum-font-size-300);--spectrum-menu-section-header-min-width:var(--spectrum-component-height-300);--spectrum-menu-item-selectable-edge-to-text-not-selected:var(--spectrum-menu-item-selectable-edge-to-text-not-selected-extra-large);--spectrum-menu-item-checkmark-height:var(--spectrum-menu-item-checkmark-height-extra-large);--spectrum-menu-item-checkmark-width:var(--spectrum-menu-item-checkmark-width-extra-large);--spectrum-menu-item-top-to-checkmark:var(--spectrum-menu-item-top-to-selected-icon-extra-large);--spectrum-menu-back-icon-margin:var(--spectrum-navigational-indicator-top-to-back-icon-extra-large)}:host:dir(rtl),:host([dir=rtl]){--spectrum-menu-item-focus-indicator-direction-scalar:-1}:host{inline-size:auto;inline-size:var(--mod-menu-inline-size,auto);box-sizing:border-box;margin:0;padding:0;list-style-type:none;display:inline-block;overflow:auto}:host:lang(ja),:host:lang(ko),:host:lang(zh){--spectrum-menu-item-label-line-height:var(--mod-menu-item-label-line-height-cjk,var(--spectrum-menu-item-label-line-height-cjk));--spectrum-menu-item-description-line-height:var(--mod-menu-item-description-line-height-cjk,var(--spectrum-menu-item-description-line-height-cjk));--spectrum-menu-section-header-line-height:var(--mod-menu-section-header-line-height-cjk,var(--spectrum-menu-section-header-line-height-cjk))}:host([selects]) ::slotted(sp-menu-item){--spectrum-menu-checkmark-display:var(--spectrum-menu-checkmark-display-hidden);padding-inline-start:var(--mod-menu-item-selectable-edge-to-text-not-selected,var(--spectrum-menu-item-selectable-edge-to-text-not-selected))}:host([selects]) ::slotted(sp-menu-item[selected]){--spectrum-menu-checkmark-display:var(--spectrum-menu-checkmark-display-shown);padding-inline-start:var(--mod-menu-item-label-inline-edge-to-content,var(--spectrum-menu-item-label-inline-edge-to-content))}.spectrum-Menu-backIcon{margin-block:var(--mod-menu-back-icon-margin-block,var(--spectrum-menu-back-icon-margin));margin-inline:var(--mod-menu-back-icon-margin-inline,var(--spectrum-menu-back-icon-margin));fill:var(--highcontrast-menu-item-color-default,var(--mod-menu-back-icon-color-default,var(--spectrum-menu-section-header-color)));color:var(--highcontrast-menu-item-color-default,var(--mod-menu-back-icon-color-default,var(--spectrum-menu-section-header-color)))}.spectrum-Menu-back:focus-visible{box-shadow:var(--spectrum-menu-item-focus-indicator-shadow)var(--spectrum-menu-item-focus-indicator-border-width)0 0 0 var(--spectrum-menu-item-focus-indicator-color-default);outline:var(--spectrum-menu-item-focus-indicator-width)var(--spectrum-menu-item-focus-indicator-outline-style)var(--spectrum-menu-item-focus-indicator-color-default);outline-offset:var(--spectrum-menu-item-focus-indicator-offset);border-radius:var(--spectrum-menu-item-corner-radius)}.spectrum-Menu-sectionHeading{color:var(--highcontrast-menu-item-color-default,var(--mod-menu-section-header-color,var(--spectrum-menu-section-header-color)));font-size:var(--mod-menu-section-header-font-size,var(--spectrum-menu-section-header-font-size));font-weight:var(--mod-menu-section-header-font-weight,var(--spectrum-menu-section-header-font-weight));line-height:var(--mod-menu-section-header-line-height,var(--spectrum-menu-section-header-line-height));min-inline-size:var(--mod-menu-section-header-min-width,var(--spectrum-menu-section-header-min-width));padding-block-start:var(--mod-menu-section-header-top-edge-to-text,var(--mod-menu-item-top-edge-to-text,var(--spectrum-menu-item-top-edge-to-text)));padding-block-end:var(--mod-menu-section-header-bottom-edge-to-text,var(--mod-menu-item-bottom-edge-to-text,var(--spectrum-menu-item-bottom-edge-to-text)));padding-inline:var(--mod-menu-item-label-inline-edge-to-content,var(--spectrum-menu-item-label-inline-edge-to-content));grid-area:sectionHeadingArea/1/sectionHeadingArea/-1;display:block}.spectrum-Menu-back{padding-inline:0 var(--mod-menu-back-padding-inline-end,var(--spectrum-menu-item-label-inline-edge-to-content));padding-inline:var(--mod-menu-back-padding-inline-start,0)var(--mod-menu-back-padding-inline-end,var(--spectrum-menu-item-label-inline-edge-to-content));padding-block:0;padding-block:var(--mod-menu-back-padding-block-start,0)var(--mod-menu-back-padding-block-end,0);flex-flow:wrap;align-items:center;display:flex}.spectrum-Menu-back .spectrum-Menu-sectionHeading{padding:0}.spectrum-Menu-backButton{cursor:pointer;background:0 0;border:0;margin:0;padding:0;display:inline-flex}.spectrum-Menu-backButton:focus-visible{outline:var(--spectrum-focus-indicator-thickness)solid var(--spectrum-focus-indicator-color);outline-offset:calc((var(--spectrum-focus-indicator-thickness) + 1px)*-1)}.spectrum-Menu-backHeading{color:var(--highcontrast-menu-item-color-default,var(--mod-menu-back-heading-color,var(--spectrum-menu-section-header-color)));font-size:var(--mod-menu-section-header-font-size,var(--spectrum-menu-section-header-font-size));font-weight:var(--mod-menu-section-header-font-weight,var(--spectrum-menu-section-header-font-weight));line-height:var(--mod-menu-section-header-line-height,var(--spectrum-menu-section-header-line-height));display:block}:host{width:var(--swc-menu-width);flex-direction:column;display:inline-flex}:host(:focus){outline:none}::slotted(*){flex-shrink:0}
`;

var v=Object.defineProperty;var I=Object.getOwnPropertyDescriptor;var o=(m,u,e,s)=>{for(var t=s>1?void 0:s?I(u,e):u,i=m.length-1,n;i>=0;i--)(n=m[i])&&(t=(s?n(u,e,t):n(t))||t);return s&&t&&v(u,e,t),t};class Menu extends SizedMixin(SpectrumElement,{noDefaultSize:!0}){constructor(){super();this.label="";this.ignore=!1;this.value="";this.valueSeparator=",";this._selected=[];this.selectedItems=[];this.childItemSet=new Set;this.focusedItemIndex=0;this.focusInItemIndex=0;this.selectedItemsMap=new Map;this.pointerUpTarget=null;this.descendentOverlays=new Map;this.handleSubmenuClosed=e=>{e.stopPropagation(),e.composedPath()[0].dispatchEvent(new Event("sp-menu-submenu-closed",{bubbles:!0,composed:!0}));};this.handleSubmenuOpened=e=>{e.stopPropagation(),e.composedPath()[0].dispatchEvent(new Event("sp-menu-submenu-opened",{bubbles:!0,composed:!0})),e.composedPath().find(i=>this.childItemSet.has(i));};this._hasUpdatedSelectedItemIndex=!1;this._willUpdateItems=!1;this.cacheUpdated=Promise.resolve();this.resolveCacheUpdated=()=>{};!this.rovingTabindexController&&this.controlsRovingTabindex&&(this.rovingTabindexController=new RovingTabindexController(this,{direction:"vertical",focusInIndex:e=>{let s=-1;const t=e==null?void 0:e.findIndex((i,n)=>(!e[s]&&!i.disabled&&(s=n),i.selected&&!i.disabled));return e&&t&&e[t]?t:s},elements:()=>this.childItems,isFocusableElement:this.isFocusableElement.bind(this),hostDelegatesFocus:!0})),this.addEventListener("sp-menu-item-added-or-updated",this.onSelectableItemAddedOrUpdated),this.addEventListener("sp-menu-item-added-or-updated",this.onFocusableItemAddedOrUpdated,{capture:!0}),this.addEventListener("click",this.handleClick),this.addEventListener("focusout",this.handleFocusout),this.addEventListener("sp-menu-item-keydown",this.handleKeydown),this.addEventListener("pointerup",this.handlePointerup),this.addEventListener("sp-opened",this.handleSubmenuOpened),this.addEventListener("sp-closed",this.handleSubmenuClosed);}static get styles(){return [t]}get isSubmenu(){return this.slot==="submenu"}get selected(){return this.selects?this._selected:[]}set selected(e){if(e===this.selected)return;const s=this.selected;this._selected=e,this.selectedItems=[],this.selectedItemsMap.clear(),this.childItems.forEach(t=>{this===t.menuData.selectionRoot&&(t.selected=this.selected.includes(t.value),t.selected&&(this.selectedItems.push(t),this.selectedItemsMap.set(t,!0)));}),this.requestUpdate("selected",s);}get focusInItem(){var e;return (e=this.rovingTabindexController)==null?void 0:e.focusInElement}get controlsRovingTabindex(){return !0}get childItems(){return this.cachedChildItems||(this.cachedChildItems=this.updateCachedMenuItems()),this.cachedChildItems}updateCachedMenuItems(){var t;if(!this.menuSlot)return [];const e=[],s=this.menuSlot.assignedElements({flatten:!0});for(const[i,n]of s.entries()){if(this.childItemSet.has(n)){e.push(n);continue}const d=n.localName==="slot"?n.assignedElements({flatten:!0}):[...n.querySelectorAll(":scope > *")];s.splice(i,1,n,...d);}return this.cachedChildItems=[...e],(t=this.rovingTabindexController)==null||t.clearElementCache(),this.cachedChildItems}get childRole(){if(this.resolvedRole==="listbox")return "option";switch(this.resolvedSelects){case"single":return "menuitemradio";case"multiple":return "menuitemcheckbox";default:return "menuitem"}}get ownRole(){return "menu"}onFocusableItemAddedOrUpdated(e){e.menuCascade.set(this,{hadFocusRoot:!!e.item.menuData.focusRoot,ancestorWithSelects:e.currentAncestorWithSelects}),this.selects&&(e.currentAncestorWithSelects=this),e.item.menuData.focusRoot=e.item.menuData.focusRoot||this;}onSelectableItemAddedOrUpdated(e){var i,n;if(!e.menuCascade.get(this))return;if(e.item.menuData.parentMenu=e.item.menuData.parentMenu||this,this.addChildItem(e.item),this.selects==="inherit"){this.resolvedSelects="inherit";const l=(i=e.currentAncestorWithSelects)==null?void 0:i.ignore;this.resolvedRole=l?"none":((n=e.currentAncestorWithSelects)==null?void 0:n.getAttribute("role"))||this.getAttribute("role")||void 0;}else this.selects?(this.resolvedRole=this.ignore?"none":this.getAttribute("role")||void 0,this.resolvedSelects=this.selects):(this.resolvedRole=this.ignore?"none":this.getAttribute("role")||void 0,this.resolvedSelects=this.resolvedRole==="none"?"ignore":"none");if(this.resolvedRole==="none")return;const t=this.resolvedSelects==="single"||this.resolvedSelects==="multiple";e.item.menuData.cleanupSteps.push(l=>this.removeChildItem(l)),(t||!this.selects&&this.resolvedSelects!=="ignore")&&!e.item.menuData.selectionRoot&&(e.item.setRole(this.childRole),e.item.menuData.selectionRoot=e.item.menuData.selectionRoot||this,e.item.selected&&(this.selectedItemsMap.set(e.item,!0),this.selectedItems=[...this.selectedItems,e.item],this._selected=[...this.selected,e.item.value],this.value=this.selected.join(this.valueSeparator)));}addChildItem(e){this.childItemSet.add(e),this.handleItemsChanged();}async removeChildItem(e){(e.focused||e.hasAttribute("focused")||e.active)&&(this._updateFocus=this.getNeighboringFocusableElement(e)),this.childItemSet.delete(e),this.cachedChildItems=void 0;}focusOnFirstSelectedItem({preventScroll:e}={}){var t;if(!this.rovingTabindexController)return;const s=this.selectedItems.find(i=>this.isFocusableElement(i));if(!s){this.focus({preventScroll:e});return}s&&!e&&s.scrollIntoView({block:"nearest"}),(t=this.rovingTabindexController)==null||t.focusOnItem(s);}focus({preventScroll:e}={}){if(this.rovingTabindexController){if(!this.childItems.length||this.childItems.every(s=>s.disabled))return;if(this.childItems.some(s=>s.menuData.focusRoot!==this)){super.focus({preventScroll:e});return}this.rovingTabindexController.focus({preventScroll:e});}}handleFocusout(){var e;this.matches(":focus-within")||(e=this.rovingTabindexController)==null||e.reset();}handleClick(e){if(this.pointerUpTarget===e.target){this.pointerUpTarget=null;return}this.handlePointerBasedSelection(e);}handlePointerup(e){this.pointerUpTarget=e.target,this.handlePointerBasedSelection(e);}handlePointerBasedSelection(e){var i,n;if(e instanceof MouseEvent&&e.button!==0)return;const t=e.composedPath().find(l=>l instanceof Element?l.getAttribute("role")===this.childRole:!1);if(e.defaultPrevented){const l=this.childItems.indexOf(t);((i=t==null?void 0:t.menuData)==null?void 0:i.focusRoot)===this&&l>-1&&(this.focusedItemIndex=l);return}if(t!=null&&t.href&&t.href.length){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}));return}else if(((n=t==null?void 0:t.menuData)==null?void 0:n.selectionRoot)===this&&this.childItems.length){if(e.preventDefault(),t.hasSubmenu||t.open)return;this.selectOrToggleItem(t);}else return;this.prepareToCleanUp();}handleDescendentOverlayOpened(e){const s=e.composedPath()[0];s.overlayElement&&this.descendentOverlays.set(s.overlayElement,s.overlayElement);}handleDescendentOverlayClosed(e){const s=e.composedPath()[0];s.overlayElement&&this.descendentOverlays.delete(s.overlayElement);}getNeighboringFocusableElement(e,s=!1){var d;const t=s?-1:1,i=((d=this.rovingTabindexController)==null?void 0:d.elements)||[],n=e?i.indexOf(e):-1;let l=Math.min(Math.max(0,n+t),i.length-1);for(;!this.isFocusableElement(i[l])&&0<l&&l<i.length-1;)l+=t;return this.isFocusableElement(i[l])?i[l]:e||i[0]}async selectOrToggleItem(e){var a;const s=this.resolvedSelects,t=new Map(this.selectedItemsMap),i=this.selected.slice(),n=this.selectedItems.slice(),l=this.value;if(e.menuData.selectionRoot!==this)return;if(s==="multiple"){this.selectedItemsMap.has(e)?this.selectedItemsMap.delete(e):this.selectedItemsMap.set(e,!0);const r=[],p=[];this.childItemSet.forEach(h=>{h.menuData.selectionRoot===this&&this.selectedItemsMap.has(h)&&(r.push(h.value),p.push(h));}),this._selected=r,this.selectedItems=p,this.value=this.selected.join(this.valueSeparator);}else this.selectedItemsMap.clear(),this.selectedItemsMap.set(e,!0),this.value=e.value,this._selected=[e.value],this.selectedItems=[e];if(!this.dispatchEvent(new Event("change",{cancelable:!0,bubbles:!0,composed:!0}))){this._selected=i,this.selectedItems=n,this.selectedItemsMap=t,this.value=l;return}if(s==="single"){for(const r of t.keys())r!==e&&(r.selected=!1);e.selected=!0;}else s==="multiple"?e.selected=!e.selected:!e.hasSubmenu&&((a=e==null?void 0:e.menuData)==null?void 0:a.focusRoot)===this&&this.dispatchEvent(new Event("close",{bubbles:!0}));}navigateBetweenRelatedMenus(e){const{key:s,root:t}=e,i=this.isLTR&&s==="ArrowRight"||!this.isLTR&&s==="ArrowLeft",n=this.isLTR&&s==="ArrowLeft"||!this.isLTR&&s==="ArrowRight"||s==="Escape",l=t;i?l!=null&&l.hasSubmenu&&(e.stopPropagation(),l.openOverlay()):n&&this.isSubmenu&&(e.stopPropagation(),this.dispatchEvent(new Event("close",{bubbles:!0})),this.updateSelectedItemIndex());}handleKeydown(e){var d;if(e.defaultPrevented||!this.rovingTabindexController)return;const{key:s,root:t,shiftKey:i,target:n}=e,l=["Enter"," "].includes(s);if(i&&n!==this&&this.hasAttribute("tabindex")){this.removeAttribute("tabindex");const a=r=>{!r.shiftKey&&!this.hasAttribute("tabindex")&&(document.removeEventListener("keyup",a),this.removeEventListener("focusout",a));};document.addEventListener("keyup",a),this.addEventListener("focusout",a);}if(s==="Tab"){this.closeDescendentOverlays();return}if(l&&(t!=null&&t.hasSubmenu)&&!t.open){e.preventDefault(),t.openOverlay();return}if(s===" "||s==="Enter"){e.preventDefault(),(d=t==null?void 0:t.focusElement)==null||d.click(),t&&this.selectOrToggleItem(t);return}this.navigateBetweenRelatedMenus(e);}prepareToCleanUp(){document.addEventListener("focusout",()=>{requestAnimationFrame(()=>{const e=this.focusInItem;e&&(e.focused=!1);});},{once:!0});}updateSelectedItemIndex(){let e=0;const s=new Map,t=[],i=[];let n=this.childItems.length;for(;n;){n-=1;const l=this.childItems[n];l.menuData.selectionRoot===this&&((l.selected||!this._hasUpdatedSelectedItemIndex&&this.selected.includes(l.value))&&(e=n,s.set(l,!0),t.unshift(l.value),i.unshift(l)),n!==e&&(l.focused=!1));}this.selectedItemsMap=s,this._selected=t,this.selectedItems=i,this.value=this.selected.join(this.valueSeparator),this.focusedItemIndex=e,this.focusInItemIndex=e;}handleItemsChanged(){this.cachedChildItems=void 0,this._willUpdateItems||(this._willUpdateItems=!0,this.cacheUpdated=this.updateCache());}async updateCache(){this.hasUpdated?await new Promise(e=>requestAnimationFrame(()=>e(!0))):await Promise.all([new Promise(e=>requestAnimationFrame(()=>e(!0))),this.updateComplete]),this.cachedChildItems===void 0&&(this.updateSelectedItemIndex(),this.updateItemFocus()),this._willUpdateItems=!1;}updateItemFocus(){var e;(e=this.focusInItem)==null||e.setAttribute("tabindex","0"),this.childItems.length!=0;}closeDescendentOverlays(){this.descendentOverlays.forEach(e=>{e.open=!1;}),this.descendentOverlays=new Map;}handleSlotchange({target:e}){var t;const s=e.assignedElements({flatten:!0});this.childItems.length!==s.length&&s.forEach(i=>{typeof i.triggerUpdate!="undefined"?i.triggerUpdate():typeof i.childItems!="undefined"&&i.childItems.forEach(n=>{n.triggerUpdate();});}),this._updateFocus&&((t=this.rovingTabindexController)==null||t.focusOnItem(this._updateFocus),this._updateFocus=void 0);}renderMenuItemSlot(){return x`
            <slot
                @sp-menu-submenu-opened=${this.handleDescendentOverlayOpened}
                @sp-menu-submenu-closed=${this.handleDescendentOverlayClosed}
                @slotchange=${this.handleSlotchange}
            ></slot>
        `}render(){return this.renderMenuItemSlot()}firstUpdated(e){super.firstUpdated(e);const s=[new Promise(t=>requestAnimationFrame(()=>t(!0)))];[...this.children].forEach(t=>{t.localName==="sp-menu-item"&&s.push(t.updateComplete);}),this.childItemsUpdated=Promise.all(s);}updated(e){super.updated(e),e.has("selects")&&this.hasUpdated&&this.selectsChanged(),e.has("label")&&(this.label||typeof e.get("label")!="undefined")&&(this.label?this.setAttribute("aria-label",this.label):this.removeAttribute("aria-label"));}selectsChanged(){const e=[new Promise(s=>requestAnimationFrame(()=>s(!0)))];this.childItemSet.forEach(s=>{e.push(s.triggerUpdate());}),this.childItemsUpdated=Promise.all(e);}connectedCallback(){super.connectedCallback(),!this.hasAttribute("role")&&!this.ignore&&this.setAttribute("role",this.ownRole),this.updateComplete.then(()=>this.updateItemFocus());}isFocusableElement(e){return e?!e.disabled:!1}disconnectedCallback(){this.cachedChildItems=void 0,this.selectedItems=[],this.selectedItemsMap.clear(),this.childItemSet.clear(),this.descendentOverlays=new Map,super.disconnectedCallback();}async getUpdateComplete(){const e=await super.getUpdateComplete();return await this.childItemsUpdated,await this.cacheUpdated,e}}Menu.shadowRootOptions={...SpectrumElement.shadowRootOptions,delegatesFocus:!0},o([n({type:String,reflect:!0})],Menu.prototype,"label",2),o([n({type:Boolean,reflect:!0})],Menu.prototype,"ignore",2),o([n({type:String,reflect:!0})],Menu.prototype,"selects",2),o([n({type:String})],Menu.prototype,"value",2),o([n({type:String,attribute:"value-separator"})],Menu.prototype,"valueSeparator",2),o([n({attribute:!1})],Menu.prototype,"selected",1),o([n({attribute:!1})],Menu.prototype,"selectedItems",2),o([e("slot:not([name])")],Menu.prototype,"menuSlot",2);

defineElement("sp-menu",Menu);

export { Menu as M };
