import{a}from"./assets/vendor-CR7N1gwd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const i={list:document.querySelector(".js-gallery"),form:document.querySelector(".js-search-form"),loadMore:document.querySelector(".js-load-more"),loader:document.querySelector(".loader")};async function l(o){const t="https://api.unsplash.com",s="/search/photos",e={params:{query:o,page:1,per_page:12,orientation:"portrait",client_id:"LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc"}};try{return(await a.get(`${t}${s}`,e)).data}catch(r){console.log(r)}}function u(o){return o.map(t=>`<li class="gallery__item">
                <img src="${t.urls.small}" alt="${t.alt_description}">
            </li>`).join("")}i.form.addEventListener("submit",f);async function f(o){o.preventDefault(),i.list.innerHTML="";const t=o.currentTarget.elements.query.value.trim();if(t==="")return alert("Запит пустий");try{const s=await l(t);if(s.results.length===0)return alert("Bad request");i.list.innerHTML=u(s.results)}catch(s){console.log(s)}finally{o.target.reset()}}
//# sourceMappingURL=index.js.map
