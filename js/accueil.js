

const accueilSection1 = document.querySelector(".accueil-section-1");


const load = async (id, url) => {
    try{
        response = await fetch(url);
        if(!response.ok){
            throw new Error('Echec de telechargement du header')
        }
        data = await response.text();
        document.querySelector(id).innerHTML = data;
        
    }catch(error){
        window.location.assign("./erreur.html")
        console.log('error : ',error)
    }
    
    const nav = document.querySelector(".navbar");
    const observerAccueilSection1 = new IntersectionObserver(
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
    observerAccueilSection1.observe(accueilSection1);
};



document.addEventListener("DOMContentLoaded", () => {load('#header', './composants/header.html')});
document.addEventListener("DOMContentLoaded", () => {load('#footer', './composants/footer.html')});
