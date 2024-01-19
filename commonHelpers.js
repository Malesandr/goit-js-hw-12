import{S as f,i as p,a as h}from"./assets/vendor-ad00ede7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const w="41862655-84ddc1d5da0620d7ed5964b7a",m=document.querySelector(".form"),y=document.querySelector(".loader"),c=document.querySelector(".gallery"),n=document.querySelector(".btn-load-more"),u=new f(".gallery a",{captionDelay:250,captionsData:"alt"});n.style.display="none";y.style.display="none";let i=1,d=0;m.addEventListener("submit",async l=>{l.preventDefault();const o=l.currentTarget.elements.query.value.trim();i=1;try{const{hits:s,totalHits:r}=await g(o,i);if(s.length===0){c.innerHTML="",p.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}c.innerHTML="";const e=s.map(a=>`<li class="gallery-item">
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
            </li>`).join("");c.insertAdjacentHTML("beforeend",e);const t=document.querySelector(".gallery-item");m.reset(),t&&(d=t.getBoundingClientRect().height),u.refresh(),r<=40?n.style.display="none":n.style.display="block"}catch{p.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}});n.addEventListener("click",async()=>{i++;try{const l=m.elements.query.value.trim(),o=await g(l,i),s=o.hits.map(r=>`<li class="gallery-item">
                <a class="gallery-link" href="${r.largeImageURL}">
                    <img
                        class="gallery-image"
                        src="${r.webformatURL}"
                        alt="${r.tags}"
                    />
                    <ul class="list">
                    <li><p class='list-item'>💗Likes<span>${r.likes}</span></p></li>
                    <li><p class='list-item'>👁️Views<span>${r.views}</span></p></li>
                    <li><p class='list-item'>💬Comments<span>${r.comments}</span></p></li>
                    <li><p class='list-item'>💌Downloads<span>${r.downloads}</span></p></li>
                    </ul>
                </a>
            </li>`).join("");c.insertAdjacentHTML("beforeend",s),u.refresh(),m.reset(),o.totalHits<=i*40&&(p.info({title:"",message:"We are sorry, but you have reached the end of search results."}),n.style.display="none"),window.scrollBy({top:d*2,behavior:"smooth"})}catch{p.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}});async function g(l,o){y.style.display="block";try{const s=await h.get(`https://pixabay.com/api/?key=${w}&q=${encodeURIComponent(l)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=40`);return{hits:s.data.hits,totalHits:s.data.totalHits}}catch(s){throw new Error(s.response.status)}finally{y.style.display="none"}}
//# sourceMappingURL=commonHelpers.js.map
