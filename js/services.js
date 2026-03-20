

const hero = document.querySelector(".hero");


const load = async (id, url) => {
    try{
        response = await fetch(url);
        if(!response.ok){
            throw new Error('Echec de telechargement du header')
        }
        data = await response.text();
        document.querySelector(id).innerHTML = data;
        
    }catch(error){
        console.log('error : ',error)
    }
    
    const nav = document.querySelector(".navbar");
    const observerHero = new IntersectionObserver(
        ([entry]) => {
            if (entry.intersectionRatio < 0.3) {
                nav.classList.add("bg-4");
            } else {
                nav.classList.remove("bg-4");
            }
        },
        {
            threshold: [0.3]
        }
    );
    observerHero.observe(hero);
};



document.addEventListener("DOMContentLoaded", () => {load('#header', '../composants/header.html')});
document.addEventListener("DOMContentLoaded", () => {load('#footer', '../composants/footer.html')});

// ScrollTrigger.create({
//   trigger: "#hero",
//   start: "top top",
//   end: "70% top",

//   onEnter: () => {
//     document.querySelector(".navbar").classList.add("scrolled");
//   },

//   onLeaveBack: () => {
//     document.querySelector(".navbar").classList.remove("scrolled");
//   }
// });


// ScrollTrigger.create({
//   trigger: "#hero",
//   start: "70% top",
//   toggleClass: {
//     targets: ".navbar",
//     className: "scrolled"
//   }
// });