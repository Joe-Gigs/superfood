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

  // damn this was easy

  createFullpage();

  function createFullpage() {

    new fullpage('#fullpage', {
      scrollingSpeed: 1000
    });
  }


  $('#destroy').click(function() {
    $.fn.fullpage.destroy('all');
  });

  $('#create').click(function() {
    createFullpage();
  });


    // REMOVE IF NOT USED SOON

  // //scrollmagic code
  // const scrollMagicController = new ScrollMagic.Controller();

  // let tween1 = TweenMax.to("#panel-2", 0.5, {
  //   backgroundColor: "#ff0e4c",
  // });

  // // color change 
  // let scene1 = new ScrollMagic.Scene({
  //     triggerElement: "#panel-2",
  //     offset: 350
  //   })

  //   .setTween(tween1)
  //   .setClassToggle("#logo-smaller", "visible") // add class toggle
  //   .addTo(scrollMagicController)

  // let lineOneScroll = new ScrollMagic.Scene({
  //     triggerElement: "#line-1",
  //     triggerHook: 0.9,
  //     duration: "80%",
  //     offset: 50
  //   })
  //   .setClassToggle("#line-1", "visible") // add class to reveal
  //   .addTo(scrollMagicController);

  // let lineTwoScroll = new ScrollMagic.Scene({
  //     triggerElement: "#line-2",
  //     triggerHook: 0.9,
  //     duration: "80%",
  //     offset: 50
  //   })
  //   .setClassToggle("#line-2", "visible") // add class to reveal
  //   .addTo(scrollMagicController);

  // let lineThreeScroll = new ScrollMagic.Scene({
  //     triggerElement: "#line-3",
  //     triggerHook: 0.9,
  //     duration: "80%",
  //     offset: 50
  //   })
  //   .setClassToggle("#line-3", "visible") // add class to reveal
  //   .addTo(scrollMagicController);

  // let lineFourScroll = new ScrollMagic.Scene({
  //     triggerElement: "#line-4",
  //     triggerHook: 0.9,
  //     duration: "80%",
  //     offset: 50
  //   })
  //   .setClassToggle("#line-4", "visible") // add class to reveal
  //   .addTo(scrollMagicController);


}); //end of jquery function