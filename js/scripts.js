$(document).ready(function() {
  if(document.getElementById('planet-spinner')) {
    $('#yes-question').click(function(event) {
      var spinner = $('#planet-spinner');
      event.preventDefault();
      $('.planet').hide();
      spinner.show();
      setTimeout(function() {
        spinner.attr('src', '/images/animations/planet-fram-anim-smaller.gif');
        spinner.addClass('moveLeft');
      }, 0);
      setTimeout(function() {
        $('body').fadeOut('slow');
        setCookie("plus21", "true", 1);
        if(getCookie('redirect') == "") {
            window.location = '/planet-xpa';
        } else {
          window.location = getCookie('redirect');
        }

      }, 2700);
    });
  } else {
    if(getCookie("plus21") != "true") {
      setCookie("redirect", window.location.href, 1);
      window.location = '/';
    }
  }

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/;";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
  }

  // scroll to active beer
  var elem = $('.beers .active');
  if(elem && $(window).width() > 880) {
    var main = $(".beers");
    var t = main.offset().top;
    main.scrollTop(elem.position().top - t - 5);
  } else if (elem) {
    $('.beer-bar').scrollLeft($('.beers .active').position().left - 15);
  }
});
