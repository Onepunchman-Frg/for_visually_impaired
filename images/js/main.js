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