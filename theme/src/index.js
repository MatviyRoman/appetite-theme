$('#slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2500,
  speed: 500,
  // fade: true,
  // cssEase: 'linear'
});


console.log('waypoint');
import { CountUp } from 'countup.js';
require('waypoints/lib/noframework.waypoints.min');

document.addEventListener('DOMContentLoaded', function () {
  if ($('#blockCounter').length) {
    var waypoint = new Waypoint({
      element: document.getElementById('blockCounter'),
      direction: 'up',
      handler: function (direction) {
        var options = {
          duration: 6.1,
          useGrouping: false,
        };

        let Count1 = new CountUp(
          'counter1',
          22000,
          options
        );
        if (!Count1.error) {
          Count1.start();
        } else {
          console.error(Count1.error);
        }
        let Count2 = new CountUp(
          'counter2',
          2300,
          options
        );
        if (!Count2.error) {
          Count2.start();
        } else {
          console.error(Count2.error);
        }
        let Count3 = new CountUp(
          'counter3',
          1700,
          options
        );
        if (!Count3.error) {
          Count3.start();
        } else {
          console.error(Count3.error);
        }
        let Count4 = new CountUp(
          'counter4',
          55000,
          options
        );
        if (!Count4.error) {
          Count4.start();
        } else {
          console.error(Count4.error);
        }
        this.destroy();
      },
      offset: '70%',
    });
  }

}, false);