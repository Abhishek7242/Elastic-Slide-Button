let element = document.querySelector('span');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

btn2.addEventListener('click', function () {
    gsap.to(element, {
        duration: 1.5,
        ease: "elastic.inOut(1, 0.3)",
        x: "100%",
        background: "linear-gradient(239deg, #4caadd ,#5eff35)"
    });
});
btn1.addEventListener('click', function () {
    gsap.to(element, {
        duration: 1.5,
        ease: "elastic.inOut(1, 0.3)",
        x: "0%",
        background:" linear-gradient(239deg, #dd4c4c, #d425ff)"

    });
});

