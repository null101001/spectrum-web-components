function conditionAttributeWithoutId(t,i,n){const e=t.getAttribute(i);let r=e?e.split(/\s+/):[];r=r.filter(s=>!n.find(o=>s===o)),r.length?t.setAttribute(i,r.join(" ")):t.removeAttribute(i);}function conditionAttributeWithId(t,i,n){const e=Array.isArray(n)?n:[n],r=t.getAttribute(i),s=r?r.split(/\s+/):[];return e.every(d=>s.indexOf(d)>-1)?()=>{}:(s.push(...e),t.setAttribute(i,s.join(" ")),()=>conditionAttributeWithoutId(t,i,e))}

export { conditionAttributeWithoutId as a, conditionAttributeWithId as c };
