"use strict";!function(){var t=$(".box");t.mousemove(function(t){var e=.2*t.offsetX,o=.2*t.offsetY;$("img").css({transform:"rotateX("+e+"deg) rotateY("+o+"deg)"}),$(".box").css({transform:"rotateX("+e+"deg) rotateY("+o+"deg)"})}),t.mouseleave(function(){$("img").css({transform:"rotateX(0deg) rotateY(0deg)"}),$(".box").css({transform:"rotateX(0deg) rotateY(0deg)"})})}();