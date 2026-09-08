//get the button
let scrollUp = document.getElementById("scrollUpBtn");

//when user scrolls down 20px from the top, show the button
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollUp.style.display = "block";
    }else{
        scrollUp.style.display = "none";
    }
}

//when the user clicks on the button, scroll to the top of the document
function topFunction(){
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE and Opera
}