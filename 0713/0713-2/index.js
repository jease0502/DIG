window.addEventListener('resize', function(){
    if(window.innerWidth > 500){
        console.log("寬度大於500喔");
    }
})

window.addEventListener('scroll', function(){
    console.log(window.scrollY);
})