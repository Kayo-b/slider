class Visibility {

    hideDisplay(element) {
        element.style.display = "none";
    }

    showDisplay(element) {
        element.style.display = "block";
    }

    getElement(elementID) {
        return document.getElementById(elementID)
    }

    eventListener(clickedElement) {
        this.getElement(clickedElement).addEventListener("click", (e) => {
            
        if(e.target.children[0].style.display == "block"){
            //let alterElementReturn = this.getElement(alterElement)
            this.hideDisplay(e.target.children[0]);
        }
        else {
            //let alterElementReturn = this.getElement(alterElement)
            this.showDisplay(e.target.children[0]);
        }
        });
    };


    eventListenerSlides(clickedElement) {
        let element = this.getElement(clickedElement);
        let slides = this.getElement("slides");
        element.addEventListener("click", () => {
        if(this.getElement(clickedElement).id == "arrowRight"){
            for(let y = 0; y < slides.children.length; y++){
                if(slides.children[y].style.display == "block"){
                    if(y >= slides.children.length -1){
                        console.log(y)
                         this.showSlides(slides.children.length -1)    
                         this.showDots();
                }
                    else{
                        console.log(y)
                        this.showSlides(y+1)
                        this.showDots();
                 }
                    return
                }
            }
        }

        else {
            for(let x = 0; x < slides.children.length; x++){
                if(slides.children[x].style.display == "block"){
                    if(x <= 0){
                        this.showSlides(0)
                        this.showDots();
                    }
                    else {
                        this.showSlides(x-1)
                        this.showDots();
                    }
                }      
            }
        }
        });
    };

    showSlides(position) {
          let eleHTML = document.getElementById("slides");
          for(let x = 0; x < eleHTML.children.length; x++){
            eleHTML.children[x].style.display = "none";
        }   
          eleHTML.children[position].style = `
          display: block; `
    }

    showDots() {
        let eleHTML = document.getElementById("slides");
        let dotsEle = document.getElementById("dots");
        dotsEle.innerText = ``;
        for(let x = 0; x < eleHTML.children.length; x++){
          if(eleHTML.children[x].style.display == "none"){
            dotsEle.innerText += `○`;
          }
          else
            dotsEle.innerText += `●`;
      }  
    }

    autoSlide() {
        var showSlides = this.showSlides;
        var showDots = this.showDots;
        let slideFunction = () => { setTimeout(function() {
            let slides = document.getElementById("slides");
            for(let y = 0; y < slides.children.length; y++){
                if(slides.children[y].style.display == "block") {
                    if(y >= slides.children.length -1){
                        showSlides(slides.children.length -1)    
                        showDots();
                }   else {
                        showSlides(y+1)
                        showDots();
                        slideFunction();
                 } 

                return

                }
        }
    }, 3000)
    }
    slideFunction();
}

}

let visiTeste = new Visibility();
visiTeste.showDots();
visiTeste.autoSlide();
visiTeste.eventListener("dropdown-content");
visiTeste.eventListenerSlides("arrowLeft", "dropdown-content");
visiTeste.eventListenerSlides("arrowRight", "dropdown-content");
