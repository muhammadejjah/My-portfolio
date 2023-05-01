$(function () {
    "use strict";
    $(".nav-link").on("click", function () {
        $(".nav-link").removeClass('active');
        $(this).addClass('active');
    });
    $(".navbar-nav").slideUp("fast");
    $(".navbar-toggler-icon").on("click", function () {
        $(this).toggleClass("rotate-scale-up", "rotate-scale-down");
    });

    $(".navbar").on("mouseenter", function () {
        $(".navbar-nav").slideDown("fast");
    });
    $(".navbar").on("mouseleave", function () {
        $(".navbar-nav").slideUp("fast");
    });
    setInterval(() => {
        $(".hero-img-1").toggleClass("hide-img");
        $(".hero-img-2").toggleClass("show-img");

    }, 5000);
    $('.serv-img').plate({
        inverse: true
    });
    $('.serv-img2').plate({
        inverse: true
    });

    $(window).on("scroll", function () {
        var sc = $(window).scrollTop()
        if (sc >= $('#Services').offset().top - 500) {
            $(".serv-img").addClass("animate__fadeInLeft");
            $(".serv-img").css("display", "block");
            $(".serv-text").addClass("animate__fadeInUp");
            $(".top-btn").addClass("open");
            $(".contact").addClass("open");
        }
        else {
            $(".serv-img").removeClass("animate__fadeInLeft");
            $(".serv-img").css("display", "none");
            $(".serv-text").removeClass("animate__fadeInUp");
            $(".top-btn").removeClass("open");
            $(".contact").removeClass("open");
        }
        if (sc >= $('#Services').offset().top + 300) {
            $(".serv-img2").addClass("animate__fadeInUp");

            $(".serv-text2").addClass("animate__fadeInUp");


        }
        else {
            $(".serv-img2").removeClass("animate__fadeInUp");
            $(".serv-text2").removeClass("animate__fadeInUp");
        }
        if (sc >= $("#Projects").offset().top - 500) {
            $(".card").addClass("animate__flipInX");

        }
        else {
            $(".card").removeClass("animate__flipInX");
        }
        if (sc >= $("#Skills").offset().top - 500) {
            $(".html").css("width", "100%");
            $(".css").css("width", "90%");
            $(".js").css("width", "70%");
            $(".bootstrap").css("width", "80%");
            $(".jquery").css("width", "90%");
        }
        else {
            $(".html").css("width", "1px");
            $(".css").css("width", "1px");
            $(".js").css("width", "1px");
            $(".bootstrap").css("width", "1px");
            $(".jquery").css("width", "1px");
        }
    });
    $(".top-btn").on("click", function () {

        $(window).scrollTop(0)
    });
    $(".contact").on("click", function () {
        $(this).toggleClass("contact-active");
        $(".facebook").toggleClass("open-facebook");
        $(".insta").toggleClass("open-insta");
        $(".linkedin").toggleClass("open-linkedin");

    });
    $("#con").on("click", function () {
        $(".contact").toggleClass("contact-active");
        $(".facebook").toggleClass("open-facebook");
        $(".insta").toggleClass("open-insta");
        $(".linkedin").toggleClass("open-linkedin");
    });
    $("body").on("click", function () {

    });
    var darkMood = false;
    $(".dark-mood").on("click", function () {
        if (darkMood === false) {
            $("html").css({
                "--main-color": "#181818",
                "--second-color": "#282828",
                "--therd-color": "#404040",
                "--fourth-color": "#b3b3b3",
                "--five-color": "#e4e6eb",
                "--nav-color": "#121212"
            });
            $(this).css("opacity", "1");
            $(this).addClass("active");
            darkMood = true;
            console.log(darkMood)
        }
        else {

            $("html").css({
                "--main-color": "#410179",
                "--second-color": "#8530d1",
                "--therd-color": "#a25ce0",
                "--fourth-color": "#a473ce",
                "--five-color": "#dcb9fa",
                "--nav-color": "#240142"
            });
            darkMood = false;
            $(".dark-mood").css("opacity", "0.5");
            $(".dark-mood").removeClass("active");
        }
        


    });




})
onload = () => {
    document.querySelector(".loading").style.transform = "translateY(-100%)"

}
let el = document.getElementById('scroller');
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
onscroll = () => {
    let scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop)
    console.log(height)
    el.style.width = `${(scrollTop / height) * 100}%`
};
// home h1

const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

// The strings to morph between. You can change these to anything you want!
const texts = [
    "Hello",
    "I`am",
    "mohammad",
    "Front",
    "end",
    "developer"

];

// Controls the speed of morphing.
const morphTime = 2;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

// A lot of the magic happens here, this is what applies the blur filter to the text.
function setMorph(fraction) {
    // fraction = Math.cos(fraction * Math.PI) / -2 + .5;

    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

// Animation loop, which is called every frame.
function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

// Start the animation.
animate();
