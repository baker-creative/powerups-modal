(()=>{var u=document,c=(t,e=u)=>e.querySelector(t),r=(t,e=u)=>e.querySelectorAll(t);var w=(t,e)=>{let o=t==null?void 0:t.classList.toString(),n=new MutationObserver(a=>{for(let i of a)if(i.attributeName==="class"){let s=t==null?void 0:t.classList.toString();if(s!==o){e(n),o=s;break}}});return n.observe(t,{attributes:!0}),n},m=(t,e)=>{let o=new MutationObserver(n=>{for(let a of n)if(a.attributeName){e(o);break}});return o.observe(t,{attributes:!0}),o},p=t=>{var e=["mousedown","click","mouseup"];e.forEach(o=>t.dispatchEvent(new MouseEvent(o,{view:window,bubbles:!0,cancelable:!0,buttons:1})))};var d=t=>{var o,n;let e=((o=window.bc)==null?void 0:o.smoothscroll)&&((n=window.bc)==null?void 0:n.smoothscroll)instanceof Lenis;if(t){document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",e&&window.bc.smoothscroll.stop();return}document.documentElement.style.overflow="",document.body.style.overflow="",e&&window.bc.smoothscroll.start()};var b=r(".w-dropdown[data-bc-modal]"),h=r("[data-bc-modal-close]"),f=r("[data-bc-modal-override]"),y=[...b].some(t=>t.hasAttribute("data-bc-modal-transition"));if(y){let t=document.createElement("style");t.innerHTML=`
	/*
	[data-bc-modal-transition] .w-dropdown-list { opacity: 0; transition: opacity .5s ease;}
	[data-bc-modal-transition] .w-dropdown-list.w--open { transition: opacity .2s ease;}
	*/

	[data-bc-modal-transition] .w-dropdown-list:not([data-bc-modal-transition] .w-dropdown-list .w-dropdown-list) { opacity: 0; transition: opacity .5s ease;}
	[data-bc-modal-transition] .w-dropdown-list.w--open:not([data-bc-modal-transition] .w-dropdown-list.w--open .w-dropdown-list.w--open) { transition: opacity .2s ease;}
	`,document.head.appendChild(t),r("[data-bc-modal-transition]").forEach(e=>e.setAttribute("data-delay","200"))}h.forEach(t=>{t.addEventListener("click",()=>{let e=t.closest(".w-dropdown[data-bc-modal]"),o=c(".w-dropdown-toggle",e);o.classList.contains("w--open")&&p(o)})});b.forEach(t=>{let e=c(".w-dropdown-toggle",t),o=c(".w-dropdown-list",t),n=t.hasAttribute("data-bc-scroll-lock"),a=t.hasAttribute("data-bc-modal-transition");w(e,()=>{var i;if(e.classList.contains("w--open")){let s=o.querySelector("[data-bc-slider]");s&&((i=window.bc)!=null&&i.slider)&&r("[data-bc-slider-track]",marker).forEach(l=>{window.bc.slider.data(l).resize()}),s&&setTimeout(()=>window.dispatchEvent(new Event("resize")),1),n&&d(!0),a&&setTimeout(()=>o.style.opacity="1",10),f.forEach(l=>l.style.zIndex="0");return}n&&d(!1),f.forEach(s=>s.style.zIndex="")}),m(e,()=>{e.getAttribute("aria-expanded")==="false"&&a&&(o.style.opacity="")})});})();
