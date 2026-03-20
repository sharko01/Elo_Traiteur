

// const accueilSection1 = document.querySelector(".accueil-section-1");
// const hero_patisserie = document.querySelector(".hero-patisserie");


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
        window.location.assign("./error.html")
    }
    
    // const nav = document.querySelector(".navbar");
    // const observerAccueilSection1 = new IntersectionObserver(
    //     ([entry]) => {
    //         if (entry.intersectionRatio < 0.3) {
    //             nav.classList.add("bg-4");
    //         } else {
    //             nav.classList.remove("bg-4");
    //         }
    //     },
    //     {
    //         threshold: [0.3]
    //     }
    // );
    // const observerHeroPatisserie = new IntersectionObserver(
    //     ([entry]) => {
    //         if (entry.intersectionRatio < 0.3) {
    //             nav.classList.add("bg-4");
    //         } else {
    //             nav.classList.remove("bg-4");
    //         }
    //     },
    //     {
    //         threshold: [0.3]
    //     }
    // );
    // observerAccueilSection1.observe(accueilSection1);
    // observerHeroPatisserie.observe(hero_patisserie);
};


document.addEventListener("DOMContentLoaded", load('#header', 'https://sharko01.github.io/elo-traiteur/composants/header.html'));
document.addEventListener("DOMContentLoaded", load('#footer', 'https://sharko01.github.io/elo-traiteur/composants/footer.html'));

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