jQuery(document).ready(function(o){var t=o("#navbar-main"),e=o(".portfolio-content"),c=t.offset().top,n=o(window);aboutStart=6*c,n.scroll(function(){n.scrollTop()>=c&&n.scrollTop()>=aboutStart?e.addClass("portfolio-content--fixed-top-transition"):n.scrollTop()>=c?(t.addClass("navbar--fixed-top"),e.addClass("portfolio-content--fixed-top").removeClass("portfolio-content--fixed-top-transition")):(t.removeClass("navbar--fixed-top"),e.removeClass("portfolio-content--fixed-top").removeClass("portfolio-content--fixed-top-transition"))});var r=o(".scroll-point"),i="up",p=0,l=!1;o(document.body).on("DOMMouseScroll mousewheel",function(t){if(l)return!1;function e(t){o(t+"__title").addClass("project-title__active"),o(t+"__subtitle").css({"margin-left":"0",opacity:"1"}),o(t+"__description").delay(1e3).css({height:"auto",opacity:"1",overflow:"visible"})}function c(t){o(t+"__title").removeClass("project-title__active"),o(t+"__subtitle").css({"margin-left":"-200px",opacity:"0"}),o(t+"__description").css({height:"0",opacity:"0",overflow:"hidden"})}function n(){return e(".project--1"),c(".project--2"),c(".project--3"),c(".project--4"),c(".project--5"),o("html,body").stop().animate({scrollTop:r.eq(1).offset().top},750,function(){l=!1}),!1}function s(){return e(".project--2"),c(".project--1"),c(".project--3"),c(".project--4"),c(".project--5"),o("html,body").stop().animate({scrollTop:r.eq(2).offset().top},750,function(){l=!1}),!1}function f(){return e(".project--3"),c(".project--1"),c(".project--2"),c(".project--4"),c(".project--5"),o("html,body").stop().animate({scrollTop:r.eq(3).offset().top},750,function(){l=!1}),!1}function a(){return e(".project--4"),c(".project--1"),c(".project--2"),c(".project--3"),c(".project--5"),o("html,body").stop().animate({scrollTop:r.eq(4).offset().top},750,function(){l=!1}),!1}function u(){return e(".project--5"),c(".project--1"),c(".project--2"),c(".project--3"),c(".project--4"),o("html,body").stop().animate({scrollTop:r.eq(5).offset().top},750,function(){l=!1}),!1}return l=!0,i=t.originalEvent.detail>0||t.originalEvent.wheelDelta<0?"down":"up",p=-1,r.each(function(t){p<0&&o(this).offset().top>=o(window).scrollTop()&&(p=t)}),"up"==i&&p>0&&p--,"down"==i&&p<r.length&&p++,o(".project--1").click(function(){n()}),o(".project--2").click(function(){s()}),o(".project--3").click(function(){f()}),o(".project--4").click(function(){a()}),o(".project--5").click(function(){u()}),1==p?n():2==p?s():3==p?f():4==p?a():5==p&&u(),o("html,body").stop().animate({scrollTop:r.eq(p).offset().top},750,function(){l=!1}),!1}),o(window).resize(function(){o("html,body").scrollTop(r.eq(p).offset().top)})});
//# sourceMappingURL=home.js.map