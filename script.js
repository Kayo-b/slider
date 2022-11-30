class Visibility {

    hideDisplay(element) {
        //element.style.display = "none";
        element.style.visibility = "hidden";
    }

    showDisplay(element) {
        //element.style.display = "flex";
        element.style.visibility = "visible";
    }

    getElement(elementID) {
        return document.getElementById(elementID)
    }

    eventListener(clickedElement, alterElement) {
        let alterElement2 = this.getElement(alterElement)
        let alterElementChildren = alterElement2.children
        this.getElement(clickedElement).addEventListener("click", (e) => {
        let indexOfTarget = Array.from(this.getElement(clickedElement).children).indexOf(e.target)
        console.log(indexOfTarget)
        console.log(alterElementChildren[indexOfTarget])
        if(alterElementChildren[indexOfTarget].style.visibility == "visible") {
            //let alterElementReturn = this.getElement(alterElement)
            this.hideDisplay(alterElement2);
            this.hideDisplay(alterElementChildren[indexOfTarget]);
            
        }
        else {
            //let alterElementReturn = this.getElement(alterElement)
            //this.showDisplay(alterElement2);
            this.showDisplay(alterElementChildren[indexOfTarget]);
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

    mouseOut(elementOne, elementTwo) {


        Array.from(document.getElementsByClassName(elementOne)).forEach(item => item.addEventListener("mouseout", () => 
            Array.from(document.getElementsByClassName(elementOne)).forEach(item => item.style.visibility = "hidden")));

        Array.from(document.getElementsByClassName(elementTwo)).forEach(item => item.addEventListener("mouseover", () => 
            Array.from(document.getElementsByClassName(elementOne)).forEach(item => item.style.visibility = "hidden")));

        document.getElementById("dropdownmenu").addEventListener("mouseover", () => 
            Array.from(document.getElementsByClassName(elementOne)).forEach(item => item.style.visibility = "hidden"));

    //     Array.from(document.getElementsByClassName(elementTwo)).forEach(item => item.addEventListener("mouseout", () => {
    //         Array.from(document.getElementsByClassName(elementTwo)).forEach(item => {
    //         if(item.style.visibility == "visible") {
    //             Array.from(document.getElementsByClassName(elementOne)).forEach(item => item.style.visibility = "hidden")}
    //         else
    //             console.log("not hidden")
    // })}));

    }

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
visiTeste.eventListener("dropdown-content", "dropdown-content2");
visiTeste.eventListenerSlides("arrowLeft", "dropdown-content");
visiTeste.eventListenerSlides("arrowRight", "dropdown-content");
visiTeste.mouseOut("subMenu", "dropMenu")