const e=async()=>{const e=document.querySelector("#table-virtualized-demo");await e.updateComplete,await(e.closest("code-example")?.updateComplete),e.items=(e=>{const t=e,n=[];for(;e;)e--,n.push({name:String(t-e),date:e});return n})(50),e.renderItem=(e,t)=>{const n=document.createElement("sp-table-cell"),l=document.createElement("sp-table-cell"),a=document.createElement("sp-table-cell");return n.textContent=`Row Item Alpha ${e.name}`,l.textContent=`Row Item Alpha ${t}`,a.textContent="Last Thing",[n,l,a]}};customElements.whenDefined("code-example").then((()=>{customElements.whenDefined("sp-table").then((()=>{e()}))}));
//# sourceMappingURL=swc.BVpjq7Fk.js.map
