let t$1 = class t{constructor(t,{target:s,config:i,callback:h,skipInitial:o}){this.t=new Set,this.o=!1,this.i=!1,this.h=t,null!==s&&this.t.add(s??t),this.l=i,this.o=o??this.o,this.callback=h,window.MutationObserver?(this.u=new MutationObserver((t=>{this.handleChanges(t),this.h.requestUpdate();})),t.addController(this)):console.warn("MutationController error: browser does not support MutationObserver.");}handleChanges(t){this.value=this.callback?.(t,this.u);}hostConnected(){for(const t of this.t)this.observe(t);}hostDisconnected(){this.disconnect();}async hostUpdated(){const t=this.u.takeRecords();(t.length||!this.o&&this.i)&&this.handleChanges(t),this.i=!1;}observe(t){this.t.add(t),this.u.observe(t,this.l),this.i=!0,this.h.requestUpdate();}disconnect(){this.u.disconnect();}};

export { t$1 as t };
