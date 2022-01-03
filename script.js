const box = document.getElementById('box');



document.addEventListener("visibilitychange", function() {
    

if(document.visibilityState === 'hidden')
{

setTimeout(()=>{
    box.style.background = 'blue';
},120000 )
    

}
    
    
  })

