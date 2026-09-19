const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
document.querySelectorAll('.service-head').forEach(button=>button.addEventListener('click',()=>{
  const item=button.closest('.service');
  const isOpen=item.classList.contains('active');
  document.querySelectorAll('.service').forEach(service=>{service.classList.remove('active');service.querySelector('button').setAttribute('aria-expanded','false');service.querySelector('.service-icon').textContent='+';});
  if(!isOpen){item.classList.add('active');button.setAttribute('aria-expanded','true');button.querySelector('.service-icon').textContent='−';}
}));
const dialog=document.querySelector('.enquiry-dialog');
document.querySelector('.open-dialog').addEventListener('click',()=>dialog.showModal());
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
document.querySelector('#enquiry-form').addEventListener('submit',e=>{e.preventDefault();e.currentTarget.hidden=true;document.querySelector('.form-success').hidden=false;});
document.querySelector('#year').textContent=new Date().getFullYear();
