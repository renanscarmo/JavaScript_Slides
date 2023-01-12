let slideIndex = 0;

const showSlide = (num) =>{
    let slides = document.getElementsByClassName('slide');
    let dots = document.getElementsByClassName('dot');
 
 
    if(num > slides.length) { slideIndex = 1}
    if(num < slides.length) { slideIndex = slides.length}
 
    //Estrutura de repetição: for , while , do while , map
    for(count = 0; count < slides.length; count++){
     slides[count].style.display = "none";
    }
 
    //count-> 0, 1, 2 
    for( count = 0; count < dots.length; count++) {
     dots[count].className = dots[count].className.replace("active", "")
 
    }
 
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className="active";
     
    }

    showSlide(slideIndex)

const changSlide = (num) => {
    showSlides(slideIndex += num)
}

const currentSlide = (num) => {
    showSlides(slideIndex = num)
}


   
   




