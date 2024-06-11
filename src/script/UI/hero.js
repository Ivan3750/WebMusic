
let DiscPos = document.querySelector('.hero__img')

window.addEventListener("scroll", ()=>{



    if(window.scrollY > 50){
        DiscPos.style.transform = `rotate(360deg)`
        
    } else{
         DiscPos.style.transform = `rotate(-360deg)`
    }
})





