let lastScrollTop = 0;
    const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.style.top = "-80px";  // Adjust this value to the height of your navbar
    } else {
    // Scrolling up
    navbar.style.top = "0";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});







var imageno =1;
displayimg(imageno);

var autoSlide = setInterval(() => nextimg(1), 4000);


function nextimg(n){
    displayimg(imageno += n)
}

function CurrentSlide(n) {
    displayimg(imageno = n)
}

function displayimg(n){
    var i;
    var image = document.getElementsByClassName("image");
    var dots = document.getElementsByClassName("dot");

    if(n > image.length){
        imageno = 1;
    }
    if(n < 1){
        imageno = image.length;
    }
    for(i=0; i<image.length; i++){
        image[i].style.display = "none";
    }
    for(i=0; i<dots.length; i++){
        dots[i].className =  dots[i].className.replace(" active", "");
    }

    image[imageno - 1].style.display ="block";
    dots[imageno - 1].className += " active";
}








var imageno2 =1;
displayimg2(imageno2);


function nextimg2(n){
    displayimg2(imageno2 += n)
}

function CurrentSlide2(n) {
    displayimg2(imageno2 = n)
}

function displayimg2(n){
    var i;
    var image2 = document.getElementsByClassName("image2");
    var dots2 = document.getElementsByClassName("buttonsforbox3");

    if(n > image2.length){
        imageno2 = 1;
    }
    if(n < 1){
        imageno2 = image2.length;
    }
    for(i=0; i<image2.length; i++){
        image2[i].style.display = "none";
    }
    for(i=0; i<dots2.length; i++){
        dots2[i].className =  dots2[i].className.replace(" active2", "");
    }

    image2[imageno2 - 1].style.display ="block";
    dots2[imageno2 - 1].className += " active2";
}






var imageno3 =1;
displayimg3(imageno3);


function nextimg3(n){
    displayimg3(imageno3 += n)
}

function CurrentSlide3(n) {
    displayimg3(imageno3 = n)
}

function displayimg3(n){
    var i;
    var image3 = document.getElementsByClassName("image3");
    var dots3 = document.getElementsByClassName("buttonsforbox4");

    if(n > image3.length){
        imageno3 = 1;
    }
    if(n < 1){
        imageno3 = image3.length;
    }
    for(i=0; i<image3.length; i++){
        image3[i].style.display = "none";
    }
    for(i=0; i<dots3.length; i++){
        dots3[i].className =  dots3[i].className.replace(" active2", "");
    }

    image3[imageno3 - 1].style.display ="block";
    dots3[imageno3 - 1].className += " active2";
}



var imageno4 =1;
displayimg4(imageno4);


function nextimg4(n){
    displayimg4(imageno4 += n)
}

function CurrentSlide4(n) {
    displayimg4(imageno4 = n)
}

function displayimg4(n){
    var i;
    var image4 = document.getElementsByClassName("image4");
    var dots4= document.getElementsByClassName("buttonsforbox5");

    if(n > image4.length){
        imageno4 = 1;
    }
    if(n < 1){
        imageno4 = image4.length;
    }
    for(i=0; i<image4.length; i++){
        image4[i].style.display = "none";
    }
    for(i=0; i<dots4.length; i++){
        dots4[i].className =  dots4[i].className.replace(" active3", "");
    }

    image4[imageno4 - 1].style.display ="block";
    dots4[imageno4 - 1].className += " active3";
}




var imageno5 =1;
displayimg5(imageno5);


function nextimg5(n){
    displayimg5(imageno5 += n)
}

function CurrentSlide5(n) {
    displayimg5(imageno5 = n)
}

function displayimg5(n){
    var i;
    var image5 = document.getElementsByClassName("image5");
    var dots5= document.getElementsByClassName("buttonsforbox6");

    if(n > image5.length){
        imageno5 = 1;
    }
    if(n < 1){
        imageno5 = image5.length;
    }
    for(i=0; i<image5.length; i++){
        image5[i].style.display = "none";
    }
    for(i=0; i<dots5.length; i++){
        dots5[i].className =  dots5[i].className.replace(" active4", "");
    }

    image5[imageno5 - 1].style.display ="block";
    dots5[imageno5 - 1].className += " active4";
}




var imageno6 =1;
displayimg6(imageno6);


function nextimg6(n){
    displayimg6(imageno6 += n)
}

function CurrentSlide6(n) {
    displayimg6(imageno6 = n)
}

function displayimg6(n){
    var i;
    var image6 = document.getElementsByClassName("image6");
    var dots6= document.getElementsByClassName("buttonsforbox7");

    if(n > image6.length){
        imageno6 = 1;
    }
    if(n < 1){
        imageno6 = image6.length;
    }
    for(i=0; i<image6.length; i++){
        image6[i].style.display = "none";
    }
    for(i=0; i<dots6.length; i++){
        dots6[i].className =  dots6[i].className.replace(" active5", "");
    }

    image6[imageno6 - 1].style.display ="block";
    dots6[imageno6 - 1].className += " active5";
}




