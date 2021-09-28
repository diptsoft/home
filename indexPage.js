
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3500); // Change image every 2 seconds
}
    
var slideIndex1 = 0;
showSlides1();

function showSlides1() {
  var i;
  var slides1 = document.getElementsByClassName("mySlides1");
  var dots1 = document.getElementsByClassName("dot1");
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";  
  }
  slideIndex1++;
  if (slideIndex1 > slides1.length) {slideIndex1 = 1}    
  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";  
  dots1[slideIndex1-1].className += " active";
  setTimeout(showSlides1, 4000); // Change image every 2 seconds
}


//for caresol model

class walkModel{
    constructor(img_url, name, onclick){
        this.img_url;
        this.name;  
        this.onclick;

    }

}
//for caresol walkthrow
 var total_games = 5;
 var total_apps = 5;
// var walkData = 
//document.write(total_games);
//document.write(total_apps);


/////////////////////////////////animation//////////////////////////////////////


$(document).ready(function(){     //when the document(page) get properly loaded then below->
    $(window).scroll(function(){    //selector in jQuery (select the window and fire the fuction when it is scrolled up)
        var  positiontop = $(document).scrollTop();
        console.log(positiontop);

     if((positiontop>100) && (positiontop<500)){
      
        $('#insta').addClass('animated bounceInLeft');  //animation.css check github for more
        $('#fb').addClass('animated zoomInDown');
        $('#twit').addClass('animated flipInX');
        $('#yt').addClass('animated bounceInRight');
        $('#skyp').addClass('animated flipInX');
        $('#goog').addClass('animated bounceInLeft');
        $('#git').addClass('animated flipInX');
        $('#snap').addClass('animated zoomInDown');
     }

     if((positiontop>318) && (positiontop<636)){
      
      $('#textanimate1').addClass('animated slideInUp');
     

   }
   if((positiontop>500) && (positiontop<700)){
      
    $('.third').addClass('animated slideInUp');


 }

 if((positiontop>700) && (positiontop<900)){
      
      $('#home').addClass('animated bounceInLeft');  
      $('#android').addClass('animated zoomInDown');
      $('#ios').addClass('animated bounceInLeft');
      $('#aboutus').addClass('animated bounceInLeft');
      $('#windows').addClass('animated bounceInLeft');
      $('#welcome').addClass('animated zoomInDown');

   }


});

});