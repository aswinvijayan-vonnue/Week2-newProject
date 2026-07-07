const areas=document.querySelectorAll('area');
function callbackfn(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }else{
            entry.target.classList.remove('visible');
        }
        
    });
}
const observer=new IntersectionObserver(callbackfn);
areas.forEach((area)=>observer.observe(area));