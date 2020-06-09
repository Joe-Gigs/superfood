$(document).ready(function() {
  // anime js code for food and text
  //food animations

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
  });

  let yellowSlideApple1 = anime({
    targets: "#apple-fp3-1",
    translateY: "20vh",
    duration: 300,
    loop: true,
    direction: "alternate",
    easing: "easeInCubic",
    scaleX: {
      value: 1.05,
      duration: 50,
      delay: 268
    }
  });

  let yellowSlideApple2 = anime({
    targets: "#apple-fp3-2",
    translateY: "20vh",
    duration: 200,
    loop: true,
    direction: "alternate",
    easing: "easeInCubic",
    scaleX: {
      value: 1.05,
      duration: 150,
      delay: 100
    }
  });

  let yellowSlideApple3 = anime({
    targets: "#apple-fp3-3",
    translateY: "20vh",
    duration: 300,
    loop: true,
    direction: "alternate",
    easing: "easeInCubic",
    scaleX: {
      value: 1.05,
      duration: 180,
      delay: 50
    }
  });


  let $nav = $('.header-top');
  $nav.hide();

  createFullpage();

  let gifBurger = "SUPERFOOD_ASSETS/GIFS/burger-render-pixelart.gif";

  let $burgerBunTop = $('#bun-top');
  let $tomato = $('#tomato');
  let $cheese = $('#cheese');
  let $burgerPatty = $('#burger-patty');
  let $lettuce = $('#lettuce');
  let $burgerBunBottom = $('#bun-bottom');

  const completeBurger = [
    $burgerBunTop,
    $tomato,
    $cheese,
    $burgerPatty,
    $lettuce,
    $burgerBunBottom
  ];

  completeBurger.forEach(element => element.hide());

  function createFullpage() {

    const fullPage = new fullpage('#fullpage', {
      scrollingSpeed: 3000,

      onLeave: function(origin, direction) {

        console.log(origin.index);

        if (origin.index == 0) {
          $nav.delay(800).show(400);
        } else if (origin.index == 1 && direction == 'up') {
          $nav.hide(1000);
        }

        if (origin.index == 3) {
          $burgerBunTop.delay(800).show(400);
          $tomato.delay(1000).show(400);
          $cheese.delay(1200).show(400);
          $burgerPatty.delay(1400).show(400);
          $lettuce.delay(1600).show(400);
          $burgerBunBottom.delay(1800).show(400);

        } else if (origin.index > 3) {
          $burgerBunTop.delay(800).hide(100);
          $tomato.delay(700).hide(100);
          $cheese.delay(600).hide(100);
          $burgerPatty.delay(500).hide(100);
          $lettuce.delay(400).hide(100);
          $burgerBunBottom.delay(300).hide(100);
        }
      }
    });
  }

  const btn = document.getElementById('test-btn');
  let wholeBurger = document.getElementById('whole-burger');
  collapseBurger();

  function collapseBurger() {
      $(btn).on('click', function() {
        $(wholeBurger).html('<img id="gif-burger" src="SUPERFOOD_ASSETS/GIFS/burger-render-pixelart.gif" />');   
      })
  };

  $('#destroy').click(function() {
    $.fn.fullpage.destroy('all');
  });

  $('#create').click(function() {
    createFullpage();
  });

  //color change
  let $target = $('.wrapper');
  inView('.section').on('enter', function(el) {
    let color = $(el).attr('data-background-color');
    $target.css('background-color', color);
  });




  //////////possibly delete this
  function hasClass(ele, cls) {
    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  }

}); //end of jquery function