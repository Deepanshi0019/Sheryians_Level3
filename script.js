const allImageLinks = [
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483185_Ellipse%20844.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483183_Ellipse%20845-6.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317a_Ellipse%20845-10.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317a_Ellipse%20845-10.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483183_Ellipse%20845-6.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483185_Ellipse%20844.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483185_Ellipse%20844.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483185_Ellipse%20844.png' },
    { img: 'https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png' },
  
];
function slidesimge(){
    let imgelem = document.querySelectorAll('.imgdiv')
    imgelem.forEach((link ,index)=> {
        link.innerHTML = `<img class="w-full h-full object-cover" src="${allImageLinks[index].img}"alt="">`;
    })
}
slidesimge()


function homePageAnime(){
gsap.set(".slidesm",{
    scale:5
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        start:"top top",
        end:"bottom bottom",
        scrub:3
     },
})

tl.to(".vdio",{
        "--clip":"0%",
        ease: Power2,
},'s')
.to(".slidesm",{
    scale:1,
    ease:Power2
},'s')
.to(".left",{
    xPercent:-20,
    ease:Power4
},'m')
.to(".right",{
    xPercent:20,
    ease:Power4
},'m')
}
homePageAnime();

function slidePageAnime(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger:".salmon_page",
            start:"top top",
            end:"bottom bottom",
            scrub:2
        },
        xPercent:-310,
        ease:Power4
    })
}
slidePageAnime();

function imgwithcrsr(){
document.querySelectorAll(".listelem").forEach(function(el){
    el.addEventListener("mousemove",function(dets){
      gsap.to(this.querySelector(".pic"),{
        display:"block",
        x:gsap.utils.mapRange(0,window.innerWidth,-100,100,dets.clientX),
        ease:Power4,
        duration:.5
      })
    })

    el.addEventListener("mouseleave",function(dets){
        gsap.to(this.querySelector(".pic"),{
            display:"none",
            ease:Power4,
            duration:.5
          })
    })
})
}
imgwithcrsr(); 








function paraAnimeTwo(){
var clutter = "";
document.querySelector(".textpara-two")
.textContent.split("")
.forEach(function(e){
    if(e === " "){

        clutter+=`<span>&nbsp;</span>`
    }
    clutter += `<span class="opacity-10">${e}</span>`
})
document.querySelector(".textpara-two").innerHTML=clutter;
gsap.set(".textpara-two span",{opacity: .1})
gsap.to(".textpara-two span",{
    scrollTrigger:{
        trigger:".para",
        start:"top 60%",
        end:"bottom 90%",
        scrub: 1
    },
    opacity:1,
    stagger:.03,
    ease:Power4
})
}
function paraAnime(){
var clutter = "";
document.querySelector(".textpara")
.textContent.split("")
.forEach(function(e){
    if(e === " "){

        clutter+=`<span>&nbsp;</span>`
    }
    clutter += `<span class="opacity-10">${e}</span>`
})
document.querySelector(".textpara").innerHTML=clutter;
gsap.set(".textpara span",{opacity: .1})
gsap.to(".textpara span",{
    scrollTrigger:{
        trigger:".para",
        start:"top 60%",
        end:"bottom 90%",
        scrub: 1
    },
    opacity:1,
    stagger:.03,
    ease:Power4
})
}
paraAnime();
paraAnimeTwo();


function loco(){
(function () {
    var scroll = new LocomotiveScroll();
})();
}
function capsuleAnime(){
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger:{
            trigger:".capsules",
            start:"top 80%",
            end:"bottom bottom",
            scrub:1
        },
        y:0,
        ease:Power4
    })
}

loco();
capsuleAnime();

// function color(){

//     document.querySelectorAll(".section")
//     .forEach(function(e){
//         ScrollTrigger.create({
//             trigger:e,
//             start:"top 50%",
//             end:"bottom 50%",
//             markers:true,
//             onEnter:function(){
//               document.body.setAttribute("theme",e.dataset.color);
//             },
//             onEnterBack:function(){
//                 document.body.setAttribute("theme",e.dataset.color);
//             },
//         })
//     })
// }
function color(){

    document.querySelectorAll('.section')
    .forEach(function(e){
        ScrollTrigger.create({
            trigger:e,
            start:"top 50%",
            end: "bottom 50%",
            markers:false,
            onEnter:function(){
     document.body.setAttribute("theme",e.dataset.color)
            },
            onEnterBack: function(){
                document.body.setAttribute("theme",e.dataset.color)
    
            }
        })
    })
}

color();

/*
let elems = document.querySelectorAll(".listelem")
let imgcrsr = document.querySelector(".pic")

console.log(elems)

elems.forEach(elem => {
    console.log(elem.childNodes[3])
    elem.addEventListener("mousemove",function(dets){
        console.log('hhhh')
        elem.childNodes[3].style.left = dets.x +"px"
        elem.childNodes[3].style.top = dets.y + "px"
    })

    elem.addEventListener("mouseenter",function(e){
        elem.childNodes[3].style.display = "block"
    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.display = "none"
    })
});*/




/*
gsap.set(".slidesm",{
    scale:7
})

var tl = gsap.timeline({
    scrollTrigger:{
        tigger:".home",
        start:"top top",
        end:"bottom top",
        pin:true,
        scrub:1
    }
})

tl.to(".vdio",{
    "--clip":"0%",
    ease:Power2
},'s')
.to(".slidesm",{
    scale:1,
    ease:Power2,
},'s')
.to(".left",{
    xPercent:-10,
    stagger:.03,
    ease:Power4
},'m')
.to(".right",{
    xPercent:10,
    stagger:.03,
    ease:Power4
},'m')
*/
