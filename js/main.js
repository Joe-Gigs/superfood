$(document).ready(function() {
  // anime js code for food and text
  //food 

  let appleAnimate = anime({
    targets: "#apple",
    rotate: -360,
    duration: 1600,
    loop: true,
    easing: "linear",
    duration: 1600
  });


  let spaghettiAnimate = anime({
    targets: "#spaghetti",
    loop: true,
    translateY: 60,
    easing: "linear",
    direction: "alternate",
  });

  let croissantAnime = anime({
    targets: "#croissant",
    loop: true,
    rotate: -90,
    duration: 1600,
    easing: "linear",
    direction: "alternate",
    easing: "easeInOutSine"
  });

  let orangeAnimate = anime({
    targets: "#orange",
    rotate: 360,
    duration: 1600,
    loop: true,
    easing: "linear"
  });

  let cakeAnimate = anime({
    targets: "#cake",
    translateY: 30,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'

  });

  let pizzaAnimate = anime({
    targets: "#pizza",
    loop: true,
    rotate: -90,
    duration: 1600,
    easing: "linear",
    direction: "alternate",
    easing: "easeInOutSine"
  });

  let cupcakeAnimation = anime({
    targets: "#cupcake",
    translateY: 20,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'

  });

  let sodaAnimation = anime({
    targets: "#soda",
    translateX: 50,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'

  });

  let mouthAnimation = anime({
    targets: "#mouth",
    translateX: -100,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
  });

  let reverseMouthAnimation = anime({
    targets: "#mouth-reverse",
    translateX: 100,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
    // translateX: -100,
    
  });

  createFullpage();

  function createFullpage() {

 let fullPage = new fullpage('#fullpage', {
      scrollingSpeed: 3000
    });
  }
  
  $('#destroy').click(function() {
    $.fn.fullpage.destroy('all');
  });

  $('#create').click(function() {
    createFullpage();
  });

  let $target = $('.wrapper');
  inView('.section').on('enter', function(el){
  let color = $(el).attr('data-background-color');
  $target.css('background-color', color );
});
    


}); //end of jquery function