import * as $ from 'vendor/jquery-3.4.1.js';

import 'vendor/normalize.css';
import 'css/index.css';
import 'css/print.css';

import 'css/snoots.css';
import 'css/dogs.css';
import 'css/logo.css';

import logo from 'img/dog-logo.svg'
import snoot1 from 'img/snoot1.jpg';
import snoot2 from 'img/snoot2.jpg';
import snoot3 from 'img/snoot3.jpg';
import snoot4 from 'img/snoot4.jpg';
import dog1 from 'img/dog1.jpg';
import dog2 from 'img/dog2.jpg';
import dog3 from 'img/dog3.jpg';
import dog4 from 'img/dog4.jpg';
import dog5 from 'img/dog5.jpg';
import dog6 from 'img/dog6.jpg';

$(document).ready(function() {
  var snootImages = $('.snoot.image');
  var dogImages = $('.dog.image');

  $('#logo').src = logo;
  snootImages[0].src = snoot1;
  snootImages[1].src = snoot2;
  snootImages[2].src = snoot3;
  snootImages[3].src = snoot4;
  dogImages[0].src = dog1;
  dogImages[1].src = dog2;
  dogImages[2].src = dog3;
  dogImages[3].src = dog4;
  dogImages[4].src = dog5;
  dogImages[5].src = dog6;

  // TODO: Dynamic import of the names?
  // for (var i = 0; i < snootImages.length; i++) {
  //   snootImages[i].src = `${snoot}` + i;
  // }

  // for (var i = 0; i < dogImages.length; i++) {
  //   dogImages[i].src = 'dog' + i;
  // }

  setTimeout(function() {
    $("body").removeClass("cloak");

    $(document).on("scroll", function() {
      $.each($(".image"), function() {
        for (var index = 0; index < 1000; index++) {
          this.style.width = this.offsetWidth + "px";
          this.style.filter = "hue-rotate(" + (window.scrollY % 360) + "deg)";
        }
      });

      var nextHeight = window.scrollY + 70;
      $(".logo").css("top", nextHeight);
    });
  }, 1500);
});
