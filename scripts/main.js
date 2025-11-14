(function(){
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
  const t=document.querySelector('.nav-toggle'), n=document.getElementById('site-nav');
  if(t && n){ t.addEventListener('click',()=>{ const open=n.classList.toggle('open'); t.setAttribute('aria-expanded',String(open)); }); }
})();
