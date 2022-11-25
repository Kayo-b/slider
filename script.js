class Visibility {


    // constructor(elementID) {
    //     this.elementID = elementID;
    // }

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


        }
        );
    }

}

let visiTeste = new Visibility();
visiTeste.eventListener("drop", "dropdown-content");
