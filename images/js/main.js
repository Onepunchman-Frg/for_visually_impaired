'use strict';

$(function() {
    // Аккордеон
    $.fn.accordion = function(options) {
        options = $.extend({
            headerSelector: '>li>a'
        }, options);

        return this.each(function() {
            var $this = $(this),
                header = $this.find(options.headerSelector);

            header.click(function() {
                var $this = $(this),
                    txt = $this.next(),
                    li = $this.parent();
                txt.slideToggle();
                li.toggleClass('active');
                return false;
            });
        });
    }
    
    $(function() {
        $('.faq-block__accordion').accordion();
    });
    // Аккордеон

    (function( ) {

        var slider = document.querySelector('.main-slider__items');

        if ($('.main-slider__items').length>0) {

            var sliderAutoplay = +slider.getAttribute('data-autoplay');
            var vslider = tns({
                container: slider,
                slideBy: 1,
                mode: 'carousel',
                axis: 'horizontal',
                mouseDrag: true,
                center: false,
                autoWidth: false,
                loop: false,
                rewind: true,
                preventActionWhenRunning: false,
                nav: true,
                lazyload: true,
                swipeAngle: 50,
                gutter: 0,
                navPosition: 'bottom',
                autoplayButton: false,
                autoplayButtonOutput: false,
                responsive: {
                    0: {
                        autoHeight: true,
                        controls: false,
                        autoplay: false
                    },
                    768: {
                        autoHeight: true,
                        controls: false,
                        autoplay: false
                    },
                    1024: {
                        autoHeight: false,
                        controls: false,
                        autoplay: false
                    },
                    1261: {
                        autoHeight: false,
                        controls: true,
                        autoplay: sliderAutoplay
                    }
                }
            });
        };

    })(); /*Слайдер в шапке*/


    
    

    // $('.settings-panel__btn').on("click", function (){
    //     var $this = $(this);
    //     var $body = $('.settings-panel');

    //     if ($this.hasClass('active')){
    //         $this.removeClass('active');
    //         $body.removeClass('active');
    //     } else {
    //         $this.addClass('active');
    //         $body.addClass('active');
    //     }
    // });

    let readCookieFontSize = () => {
        var rdCke = readCookie('ui_fs_stng');
        if (rdCke == '200') {
            $('body').removeClass('fs_150').addClass('fs_200');
            document.documentElement.style.setProperty('--font1Ratio', '2');
            document.documentElement.style.setProperty('--font2Ratio', '2');
        } else if (rdCke == '150') {
            $('body').removeClass('fs_200').addClass('fs_150');
            document.documentElement.style.setProperty('--font1Ratio', '1.5');
            document.documentElement.style.setProperty('--font2Ratio', '1.5');
        } else {
            $('body').removeClass('fs_200').removeClass('fs_150');
            document.documentElement.style.removeProperty('--font1Ratio', '2');
            document.documentElement.style.removeProperty('--font2Ratio', '2');
            document.documentElement.style.removeProperty('--font1Ratio', '1.5');
            document.documentElement.style.removeProperty('--font2Ratio', '1.5');
        }
    }

    $(".fs-setting input:radio").on('change', function() {
        eraseCookie('ui_fs_stng');
        var $this 			= $(this),
            value 			= $this.val();
        createCookie("ui_fs_stng", value, 30);
        readCookieFontSize();
    });
    $(".fs-setting input:radio").each(function () {
        var $this = $(this);
        var $val = $this.val();
        var rdCke = readCookie('ui_fs_stng');

        if (rdCke == $val) {
            $this.prop({'aria-checked': 'true', 'checked': true});
        };

        readCookieFontSize();
    });

        
    
    let readCookieFontColor = () => {
        var rdCke = readCookie('ui_color_stng');
        if (rdCke == '5') {
            $('body').removeClass('color_1')
                    .removeClass('color_2')
                    .removeClass('color_3')
                    .removeClass('color_4')
                    .addClass('color_5');
            $("LINK[href*='color']").remove();
            $('head').append('<link rel="stylesheet" href="images/styles/color5.css" type="text/css" />');
        } else if (rdCke == '4') {
            $('body').removeClass('color_1')
                    .removeClass('color_2')
                    .removeClass('color_3')
                    .removeClass('color_5')
                    .addClass('color_4');
            $("LINK[href*='color']").remove();
            $('head').append('<link rel="stylesheet" href="images/styles/color4.css" type="text/css" />');
        } else if (rdCke == '3') {
            $('body').removeClass('color_1')
                    .removeClass('color_2')
                    .removeClass('color_4')
                    .removeClass('color_5')
                    .addClass('color_3');
            $("LINK[href*='color']").remove();
            $('head').append('<link rel="stylesheet" href="images/styles/color3.css" type="text/css" />');
        } else if (rdCke == '2') {
            $('body').removeClass('color_1')
                    .removeClass('color_3')
                    .removeClass('color_4')
                    .removeClass('color_5')
                    .addClass('color_2');
            $("LINK[href*='color']").remove();
            $('head').append('<link rel="stylesheet" href="images/styles/color2.css" type="text/css" />');
        } else if (rdCke == '1') {
            $('body').removeClass('color_2')
                    .removeClass('color_3')
                    .removeClass('color_4')
                    .removeClass('color_5')
                    .addClass('color_1');
            $("LINK[href*='color']").remove();
            $('head').append('<link rel="stylesheet" href="images/styles/color1.css" type="text/css" />');
        } else {
            $('body').removeClass('color_1')
                    .removeClass('color_2')
                    .removeClass('color_3')
                    .removeClass('color_4')
                    .removeClass('color_5');
            $("LINK[href*='color']").remove();
            $('head').append('<link rel="stylesheet" href="images/styles/color.css" type="text/css" />');
        }
    }

    $(".color-setting input:radio").on('change', function() {
        eraseCookie('ui_color_stng');
        var $this 			= $(this),
            value 			= $this.val();
        createCookie("ui_color_stng", value, 30);
        readCookieFontColor();
    });
    $(".color-setting input:radio").each(function () {
        var $this = $(this);
        var $val = $this.val();
        var rdCke = readCookie('ui_color_stng');

        if (rdCke == $val) {
            $this.prop({'aria-checked': 'true', 'checked': true});
        };

        readCookieFontColor();
    });

    

    let readCookieLineHeight = () => {
        var rdCke = readCookie('ui_lh_stng');
        if (rdCke == '3') {
            $('body').removeClass('lh_2').addClass('lh_3');
            document.documentElement.style.setProperty('--lineHeightRatio', '2');
        } else if (rdCke == '2') {
            $('body').removeClass('lh_3').addClass('lh_2');
            document.documentElement.style.setProperty('--lineHeightRatio', '1.5');
        } else {
            $('body').removeClass('lh_2').removeClass('lh_3');
            document.documentElement.style.removeProperty('--lineHeightRatio', '2');
            document.documentElement.style.removeProperty('--lineHeightRatio', '1.5');
        }
    }

    $(".lh-setting input:radio").on('change', function() {
        eraseCookie('ui_lh_stng');
        var $this 			= $(this),
            value 			= $this.val();
        createCookie("ui_lh_stng", value, 30);
        readCookieLineHeight();
    });
    $(".lh-setting input:radio").each(function () {
        var $this = $(this);
        var $val = $this.val();
        var rdCke = readCookie('ui_lh_stng');

        if (rdCke == $val) {
            $this.prop({'aria-checked': 'true', 'checked': true});
        };

        readCookieLineHeight();
    });

    

    let readCookieLetterSpacing = () => {
        var rdCke = readCookie('ui_ls_stng');
        if (rdCke == '3') {
            $('body').removeClass('ls_2').addClass('ls_3');
        } else if (rdCke == '2') {
            $('body').removeClass('ls_3').addClass('ls_2');
        } else {
            $('body').removeClass('ls_2').removeClass('ls_3');
        }
    }

    $(".ls-setting input:radio").on('change', function() {
        eraseCookie('ui_ls_stng');
        var $this 			= $(this),
            value 			= $this.val();
        createCookie("ui_ls_stng", value, 30);
        readCookieLetterSpacing();
    });
    $(".ls-setting input:radio").each(function () {
        var $this = $(this);
        var $val = $this.val();
        var rdCke = readCookie('ui_ls_stng');

        if (rdCke == $val) {
            $this.prop({'aria-checked': 'true', 'checked': true});
        };

        readCookieLetterSpacing();
    });



    let readCookieImgSetting = () => {
        var rdCke = readCookie('ui_img_stng');
        if (rdCke == '3') {
            $('body').removeClass('img_setting_2').addClass('img_setting_3');
        } else if (rdCke == '2') {
            $('body').removeClass('img_setting_3').addClass('img_setting_2');
        } else {
            $('body').removeClass('img_setting_2').removeClass('img_setting_3');
        }
    }

    $(".img-setting input:radio").on('change', function() {
        eraseCookie('ui_img_stng');
        var $this 			= $(this),
            value 			= $this.val();
        createCookie("ui_img_stng", value, 30);
        readCookieImgSetting();
    });
    $(".img-setting input:radio").each(function () {
        var $this = $(this);
        var $val = $this.val();
        var rdCke = readCookie('ui_img_stng');

        if (rdCke == $val) {
            $this.prop({'aria-checked': 'true', 'checked': true});
        };

        readCookieImgSetting();
    });


    
    let readCookieFontFam = () => {
        var rdCke = readCookie('ui_ffam_stng');
        if (rdCke == '2') {
            $('body').addClass('ffam_setting_2');
            document.documentElement.style.setProperty('--font1', '"PT Serif", serif');
            document.documentElement.style.setProperty('--font2', '"PT Serif", serif');
        } else {
            $('body').removeClass('ffam_setting_2');
            document.documentElement.style.removeProperty('--font1', '"PT Serif", serif');
            document.documentElement.style.removeProperty('--font2', '"PT Serif", serif');
        }
    }

    $(".ffam-setting input:radio").on('change', function() {
        eraseCookie('ui_ffam_stng');
        var $this 			= $(this),
            value 			= $this.val();
        createCookie("ui_ffam_stng", value, 30);
        readCookieFontFam();
    });
    $(".ffam-setting input:radio").each(function () {
        var $this = $(this);
        var $val = $this.val();
        var rdCke = readCookie('ui_ffam_stng');

        if (rdCke == $val) {
            $this.prop({'aria-checked': 'true', 'checked': true});
        };

        readCookieFontFam();
    });


    

    
			






    let voices = speechSynthesis.getVoices();
    let defaultVoice;

    speechSynthesis.onvoiceschanged = () => {
        voices = speechSynthesis.getVoices();
        defaultVoice = voices.find((voice) => voice.name === "Google русский");

        wrapper.addEventListener("click", handleClick);
        wrapper.addEventListener("touch", handleClick);
        window.addEventListener("keydown", handleKeydown);
    };

    const PLAY = "play";
    const PAUSE = "pause";
    const RESUME = "resume";

    function handleClick({ target }) {
        switch (target.className) {
            case PLAY:
                speechSynthesis.cancel();

                const { textContent } = target.nextElementSibling;

                textContent.split(".").forEach((text) => {
                    const trimmed = text.trim();
                    if (trimmed) {
                        const U = getUtterance(target, text);
                        speechSynthesis.speak(U);
                    }
                });
                break;
            case PAUSE:
                target.className = RESUME;
                speechSynthesis.pause();
                break;
            case RESUME:
                target.className = PAUSE;
                speechSynthesis.resume();
                break;
            default:
                break;
        }
    }

    function handleKeydown({ code }) {
        switch (code) {
            case "Escape":
                return speechSynthesis.cancel();
            default:
                break;
        }
    }

    function getUtterance(target, text) {
        const U = new SpeechSynthesisUtterance(text);
            U.voice = defaultVoice;
            U.lang = defaultVoice.lang;
            U.volume = 1;
            U.rate = 1;
            U.pitch = 1;

        U.onstart = () => {
            console.log("Started");
            target.className = PAUSE;
        };
        U.onend = () => {
            console.log("Finished");
            target.className = PLAY;
        };
        U.onerror = (err) => console.error(err);

        return U;
    }
});