import{S as f,i as p,a as h}from"./assets/vendor-ad00ede7.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const b="41862655-84ddc1d5da0620d7ed5964b7a",y=document.querySelector(".form"),m=document.querySelector(".loader"),c=document.querySelector(".gallery"),n=document.querySelector(".btn-load-more"),u=new f(".gallery a",{captionDelay:250,captionsData:"alt"});n.style.display="none";m.style.display="none";let i=1,d=0;y.addEventListener("submit",async o=>{o.preventDefault();const l=o.currentTarget.elements.query.value.trim();i=1;try{const{hits:r,totalHits:s}=await g(l,i);if(r.length===0){c.innerHTML="",p.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}c.innerHTML="";const e=r.map(a=>`<li class="gallery-item">
                <a class="gallery-link" href="${a.largeImageURL}">
                    <img
                        class="gallery-image"
                        src="${a.webformatURL}"
                        alt="${a.tags}"
                    />
                    <ul class="list">
                    <li><p class='list-item'>💗Likes<span>${a.likes}</span></p></li>
                    <li><p class='list-item'>👁️Views<span>${a.views}</span></p></li>
                    <li><p class='list-item'>💬Comments<span>${a.comments}</span></p></li>
                    <li><p class='list-item'>💌Downloads<span>${a.downloads}</span></p></li>
                    </ul>
                </a>
            </li>`).join("");c.insertAdjacentHTML("beforeend",e);const t=document.querySelector(".gallery-item");t&&(d=t.getBoundingClientRect().height),u.refresh(),s<=40?n.style.display="none":n.style.display="block"}catch{p.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}});n.addEventListener("click",async()=>{i++,m.style.display="block";try{const o=y.elements.query.value.trim(),l=await g(o,i),r=l.hits.map(s=>`<li class="gallery-item">
                <a class="gallery-link" href="${s.largeImageURL}">
                    <img
                        class="gallery-image"
                        src="${s.webformatURL}"
                        alt="${s.tags}"
                    />
                    <ul class="list">
                    <li><p class='list-item'>💗Likes<span>${s.likes}</span></p></li>
                    <li><p class='list-item'>👁️Views<span>${s.views}</span></p></li>
                    <li><p class='list-item'>💬Comments<span>${s.comments}</span></p></li>
                    <li><p class='list-item'>💌Downloads<span>${s.downloads}</span></p></li>
                    </ul>
                </a>
            </li>`).join("");c.insertAdjacentHTML("beforeend",r),u.refresh(),l.totalHits<=i*40&&(p.info({title:"",message:"We are sorry, but you have reached the end of search results."}),n.style.display="none"),window.scrollBy({top:d*2,behavior:"smooth"})}catch{p.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}});y.reset();currentQuery=param;page=1;async function g(o,l){m.style.display="block";try{const r=await h.get(`https://pixabay.com/api/?key=${b}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${l}&per_page=40`);return{hits:r.data.hits,totalHits:r.data.totalHits}}catch{showError()}finally{m.style.display="none"}}
//# sourceMappingURL=commonHelpers.js.map
