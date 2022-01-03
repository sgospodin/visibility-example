const box = document.getElementById('box');



document.addEventListener("visibilitychange", function() {
    
console.log(document.visibilityState);


if(document.visibilityState === 'hidden')
{

setTimeout(()=>{
    box.style.background = 'blue';
},30000 )
    

}
    
    
  })

