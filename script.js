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

    eventListener(clickedElement, alterElement) {
        this.getElement(clickedElement).addEventListener("click", () => {
            
        if(this.getElement(alterElement).style.display == "block"){
            let alterElementReturn = this.getElement(alterElement)
            this.hideDisplay(alterElementReturn)
        }
        else {
            let alterElementReturn = this.getElement(alterElement)
            this.showDisplay(alterElementReturn)
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
                }
                    else{
                        console.log(y)
                        this.showSlides(y+1)
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
                    }
                    else {
                        this.showSlides(x-1)
                    }
                }      
            }
        }
        });
    };

    showSlides(position) {
          let eleHTML = this.getElement("slides");
          for(let x = 0; x < eleHTML.children.length; x++){
            eleHTML.children[x].style.display = "none";
        }   
          eleHTML.children[position].style = `
          display: block; `
    }
}

let visiTeste = new Visibility();
visiTeste.eventListener("drop", "dropdown-content");
visiTeste.eventListenerSlides("arrowLeft", "dropdown-content");
visiTeste.eventListenerSlides("arrowRight", "dropdown-content");
