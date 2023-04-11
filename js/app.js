document.getElementById("search-bar-input")
    .addEventListener("keyup", function (event) {
        event.preventDefault;
        if (event.key === "Enter") {
            document.getElementById("search-bar-submit").click();
        }
    });


var tl = gsap.timeline({defaults : { ease : "power1.out" } });


var tl1 = gsap.timeline({defaults : { ease : "power1.out" }, paused : true});
var tl2 = gsap.timeline({defaults : { ease : "power1.out" }, paused : true});
var tl3 = gsap.timeline({defaults : { ease : "power1.out" }, paused : true});
var tl4 = gsap.timeline({defaults : { ease : "power1.out" }, paused : true});

tl.to(".logo", {y: "0%", duration: 1, delay: 0.6 });


tl1.to("#slider1", {x: "0%", duration: 0.35});
tl2.to("#slider2", {x: "0%", duration: 0.35});
tl3.to("#slider3", {x: "0%", duration: 0.35});
tl4.to("#slider4", {x: "0%", duration: 0.35});


var item1 = document.getElementById("bouton1");
item1.addEventListener("mouseenter", function() {
    tl1.play()
});


var item2 = document.getElementById("bouton2");
item2.addEventListener("mouseenter", function() {
    tl2.play()
});


var item3 = document.getElementById("bouton3");
item3.addEventListener("mouseenter", function() {
    tl3.play()
});


var item4 = document.getElementById("bouton4");
item4.addEventListener("mouseenter", function() {
    tl4.play()
});




item1.addEventListener("mouseleave", function() {
    tl1.reverse();
});

item2.addEventListener("mouseleave", function() {
    tl2.reverse();
});

item3.addEventListener("mouseleave", function() {
    tl3.reverse();
});

item4.addEventListener("mouseleave", function() {
    tl4.reverse();
});


