hamburger=document.querySelector(".hamburger");
    hamburger.onclick=function(){
        navItem=document.querySelector(".navItem");
        navItem.classList.toggle("active");
    }

var typingEffect=new Typed(".multitext",{
    strings:["Nirmal Chandrasekar","Nirmal Chandrasekar","a Fresher","a Programmer"],
    loop:true,typingSpeed:100,backSpeed:50,backDelay:2500
})
const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements=document.querySelectorAll('.sub-container');
hiddenElements.forEach((el)=>observer.observe(el));
const hiddenElement=document.querySelectorAll('.sub-container2');
hiddenElement.forEach((el)=>observer.observe(el));