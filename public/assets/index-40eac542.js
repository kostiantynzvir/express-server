(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const i=document.getElementById("hashForm"),a=document.getElementById("message");i.addEventListener("submit",async c=>{c.preventDefault();const s=i.querySelector("#hashid").value,r=await fetch("http://localhost:3000/hash",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hashid:s})}),{success:o,result:e}=await r.json();a.className=o?"authenticated":"notAuthenticated",a.textContent=e});
