import{A as g,a as f,S as p,N as h,K as w,M as E,i as B}from"./assets/vendor-BuHM3vC_.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();function O(){const t=document.getElementById("menu-btn"),o=document.getElementById("menu"),r=document.querySelectorAll(".menu-link");t.addEventListener("click",function(){o.style.display==="none"||o.style.display===""?o.style.display="block":o.style.display="none",r.forEach(s=>{s.addEventListener("click",function(){o.style.display="none"})})})}new g(".accordion-container");f.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function T(){const{data:t}=await f.get("reviews");return t}async function P(t){return(await f.post("requests",t)).data}function A(t){return t.map(({author:o,avatar_url:r,review:s})=>`<li class="swiper-slide rev-item">
          <dir class="rev-card">
          <img
              class="rev-image"
              src="${r}"
              alt="photo ${o}"
              width="344"
            /> 
            <h3 class="rev-author">${o}</h3>
            <p class="rev-review">${s}</p>
          </dir>
        </li>`).join("")}function N(){return new p(".rev-swiper",{modules:[h,w,E],navigation:{nextEl:".rev-next",prevEl:".rev-prev"},grabCursor:!0,mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},on:{toEdge:function(){}},on:{reachEnd:function(){let t=this.nextEl;console.log(t)}},on:{fromEdge:function(){this.prevEl,this.nextEl,console.log(this.realIndex)}}})}function R(){let t=document.getElementById("rev"),o=t.querySelector(".rev-title");o.onclick=function(){t.classList.toggle("close")},window.onload=()=>{let r=document.querySelector(".rev-container"),s=new IntersectionObserver(()=>{const e=document.querySelector(".rev-list"),n=document.querySelector(".rev-error");T().then(c=>{const a=A(c);e.innerHTML=a,N(),document.querySelectorAll(".rev-button").forEach(d=>{d.classList.remove("visually-hidden")}),n.classList.add("visually-hidden")}).catch(c=>{n.classList.remove("visually-hidden")}),s.unobserve(r)},{threshold:.2});s.observe(r)}}function V(){document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("burger"),o=document.querySelector(".mob-menu"),r=document.querySelector(".close-mob-menu"),s=document.querySelector(".nav-mob-menu");t.addEventListener("click",function(){o.classList.add("active")}),r.addEventListener("click",function(){o.classList.remove("active")}),s.addEventListener("click",function(e){if(e.target.tagName==="A"){const n=e.target.getAttribute("href"),c=document.querySelector(n);c&&(window.scrollTo({top:c.offsetTop,behavior:"smooth"}),o.classList.remove("active"))}})})}function C(){const t=document.querySelectorAll(".covers-image"),o=new IntersectionObserver((r,s)=>{r.forEach(e=>{e.isIntersecting&&(e.target.classList.add("animated"),e.target.classList.remove("hidden"),s.unobserve(e.target))})},{threshold:.2});t.forEach(r=>{o.observe(r)})}function D(){new p(".img-slider",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},mousewheel:!1,keyboard:!0})}const v="work-together-form";function F(){const t=document.querySelector("#js-work-together-form"),o=document.querySelector(".backdrop"),r=document.querySelector("#close-success"),s=document.querySelector("#work-together-input-email"),e=document.querySelector(".line-text-succes"),n=document.querySelector(".line-text-error"),c=document.querySelector(".line");let a=k();t.addEventListener("submit",b),t.addEventListener("input",y),o.addEventListener("click",M),r.addEventListener("click",u),window.addEventListener("keydown",x),s.addEventListener("input",d),I(a);function y(i){const{name:l,value:m}=i.target;a={...a,[l]:m},q(a)}function d(){s.checkValidity()?(c.classList.remove("error"),c.classList.add("succes"),e.classList.remove("visually-hidden"),n.classList.add("visually-hidden")):(c.classList.remove("succes"),c.classList.add("error"),e.classList.add("visually-hidden"),n.classList.remove("visually-hidden"))}async function b(i){i.preventDefault();try{const l=await P(a);L(l)}catch(l){S(l)}}function L(i){o.classList.remove("visually-hidden"),t.reset(),localStorage.removeItem(v),c.classList.remove("succes"),e.classList.add("visually-hidden")}function S(i){B.error({maxWidth:"370px",position:"topRight",messageColor:"white",backgroundColor:"red",message:"Sorry, there was an error connecting to the server! Please correct your input and try again."}),console.error("Form submission error:",i.message)}function k(){try{return JSON.parse(localStorage.getItem(v))||{}}catch(i){return console.log("Error loading form data:",i),{}}}function q(i){try{localStorage.setItem(v,JSON.stringify(i))}catch(l){console.log("Error saving form data:",l)}}function I(i){for(const[l,m]of Object.entries(i))t.elements[l]&&(t.elements[l].value=m)}function u(){o.classList.add("visually-hidden")}function M(i){i.target===o&&u()}function x(i){i.key==="Escape"&&u()}}new g(".accord-container",{openOnInit:[0]});new p(".slider",{modules:[h,w,E],navigation:{nextEl:".button-next"},centeredSlides:!1,loop:!0,spaceBetween:0,slidesPerView:2,width:260,breakpoints:{768:{slidesPerView:3,width:600},1440:{slidesPerView:6,width:1200}}});function j(){const t=document.getElementById("scrollToTopBtn");window.addEventListener("scroll",function(){window.scrollY>800?t.style.display="flex":t.style.display="none"}),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})}j();O();V();R();D();document.addEventListener("DOMContentLoaded",()=>{C()});F();
//# sourceMappingURL=commonHelpers.js.map
