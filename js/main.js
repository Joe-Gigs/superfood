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
    duration: 425,
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
    duration: 350,
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
    duration: 400,
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

  let $finalBurger = $('#final-burger')

  //The afterLoad callback is fired once a section is loaded and the onLeave callback once a user leaves it.


  //+ = down

  let $burgerCopy = $('.burger-copy');


  function collapseBurger() {
    // $burgerBunTop.animate({
    //   top: "0"
    // },100)

    $tomato.animate({
      top: "-=6vh"
    }, 300)

    $cheese.animate({
      top: "-=13vh"
    }, 300)

    $burgerPatty.animate({
      top: "-=21vh",
      height: "68px"
    }, 300)

    $lettuce.animate({
      top: "-=33vh"
    }, 300)

    $burgerBunBottom.animate({
      top: "-=41vh"
    }, 300)

  };

  function swapText(id) {
    let text = document.getElementById(id);

    
    text.style.display = 'none';
  };

  //swapText('popsicle-text')

  let burgerCollapsed = false;
  let $increases = $('.increases');
  let $sales = $('.sales');
  const fullPage = new fullpage('#fullpage', {
    licenseKey: 'TQAhv4X^i7',
    scrollingSpeed: 3000,

    onLeave: function(origin, destination, direction) {
      console.log('origin:', origin.index);
      console.log('destination:', destination.index);
      console.log('direction:', direction)
      switch (origin.index) {
        case 0:
          if (direction == 'down') {
            $nav.delay(400).show(400);
          }
          break;

        case 1:   
          if (direction == 'up') {
            $nav.delay(400).hide(100);
          }
          break;
          
        case 3:
          if (direction == 'down' && burgerCollapsed == false) {

            $burgerBunTop.delay(400).show(400);
            $tomato.delay(600).show(400);
            $cheese.delay(800).show(400);
            $burgerPatty.delay(1000).show(400);
            $lettuce.delay(1200).show(400);
            $burgerBunBottom.delay(1400).show(400);

          }

          break;
          case 4:
            if (direction == 'up' && burgerCollapsed == false) {
              $burgerBunTop.delay(800).hide(100);
              $tomato.delay(700).hide(100);
              $cheese.delay(600).hide(100);
              $burgerPatty.delay(500).hide(100);
              $lettuce.delay(400).hide(100);
              $burgerBunBottom.delay(300).hide(100);
            }
            if (direction == 'down' && burgerCollapsed == false) {
              collapseBurger();
              $burgerCopy.css({
                'opacity': 0
              });
              burgerCollapsed = true;
            }
        }
    },
    afterLoad: function(origin, direction, destination) {

      switch (origin.index) {
        case 4:
          if (burgerCollapsed == true) {
            // $increases.css({
            //   'opacity': 1
            // })

            // $sales.css({
            //   'opacity': 1
            // })

            $finalBurger.css({
              'opacity': 1
            })

            $finalBurger.animate({
              bottom: '-=80vh'
            }, 500)

          }
        }
      }
  });

  const btn = document.getElementById('test-btn');
  let wholeBurger = document.getElementById('whole-burger');


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



}); //end of jquery function