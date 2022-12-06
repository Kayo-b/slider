# slider
Interactive menu with a simple image carousel.

### Features: 
- Drop-down menu with two menu layers;
- Simple image carousel with slight animation and automatic slide.
 
### Technical notes about project development:
This is my first attempt on drop-down menus and carousel logic. 
The slider was made using the _.children_ array of the element that holds all the images and the showing of them happens by changing the display property from _none_ to _block_ if the left/right arrows are pressed. The automatic sliding was made using a nested _setTimeout_.
The dropdown menu was somewhat experimental, I mainly used event listeners, like mouseover/out, to determine how the elements would be displayed, still needs alot of refinement.


![Recording 2022-11-21 at 14 06 00](SLider_rec.gif)
