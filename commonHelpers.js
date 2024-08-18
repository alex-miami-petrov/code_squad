import{A as f,S as p,N as y,a as v,i as I,K as O,M as x}from"./assets/vendor-Djx6wcM1.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();function P(){const t=document.getElementById("menu-btn"),o=document.getElementById("menu"),l=document.querySelectorAll(".menu-link");t.addEventListener("click",function(){o.style.display==="none"||o.style.display===""?o.style.display="block":o.style.display="none",l.forEach(c=>{c.addEventListener("click",function(){o.style.display="none"})})})}new f(".accordion-container");function T(){new p(".rev-swiper",{modules:[y],slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},mousewheel:!0,keyboard:!0})}function M(){let t=document.getElementById("rev"),o=t.querySelector(".rev-title");console.log("1"),o.onclick=function(){t.classList.toggle("open")},T()}v.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function N(t){return(await v.post("requests",t)).data}const m="work-together-form";function F(){const t=document.querySelector("#js-work-together-form"),o=document.querySelector(".backdrop"),l=document.querySelector("#close-success"),c=document.querySelector("#work-together-input-email"),e=document.querySelector(".line-text-succes"),s=document.querySelector(".line-text-error"),i=document.querySelector(".line");let a=b();t.addEventListener("submit",w),t.addEventListener("input",g),o.addEventListener("click",q),l.addEventListener("click",d),window.addEventListener("keydown",B),c.addEventListener("input",h),k(a);function g(n){const{name:r,value:u}=n.target;a={...a,[r]:u},S(a)}function h(){c.checkValidity()?(i.classList.remove("error"),i.classList.add("succes"),e.classList.remove("visually-hidden"),s.classList.add("visually-hidden")):(i.classList.remove("succes"),i.classList.add("error"),e.classList.add("visually-hidden"),s.classList.remove("visually-hidden"))}async function w(n){n.preventDefault();try{const r=await N(a);E(r)}catch(r){L(r)}}function E(n){o.classList.remove("visually-hidden"),t.reset(),localStorage.removeItem(m),i.classList.remove("succes"),e.classList.add("visually-hidden")}function L(n){I.error({maxWidth:"370px",position:"topRight",messageColor:"white",backgroundColor:"red",message:"Sorry, there was an error connecting to the server! Please correct your input and try again."}),console.error("Form submission error:",n.message)}function b(){try{return JSON.parse(localStorage.getItem(m))||{}}catch(n){return console.log("Error loading form data:",n),{}}}function S(n){try{localStorage.setItem(m,JSON.stringify(n))}catch(r){console.log("Error saving form data:",r)}}function k(n){for(const[r,u]of Object.entries(n))t.elements[r]&&(t.elements[r].value=u)}function d(){o.classList.add("visually-hidden")}function q(n){n.target===o&&d()}function B(n){n.key==="Escape"&&d()}}new f(".accord-container",{openOnInit:[0]});new p(".slider",{modules:[y,O,x],navigation:{nextEl:".button-next"},centeredSlides:!1,loop:!0,spaceBetween:0,slidesPerView:2,width:260,breakpoints:{768:{slidesPerView:3,width:600},1440:{slidesPerView:6,width:1200}}});function R(){const t=document.getElementById("scrollToTopBtn");window.addEventListener("scroll",function(){window.scrollY>800?t.style.display="flex":t.style.display="none"}),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})}R();P();M();F();
//# sourceMappingURL=commonHelpers.js.map
