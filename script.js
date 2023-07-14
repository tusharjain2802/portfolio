$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Full Stack Developer", "Designer", "C++ Coder"],
        typeSpeed: 100,
        backSpeed: 55,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Full Stack Developer", "Designer", "C++ Coder"],
        typeSpeed: 100,
        backSpeed: 55,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    const faders = document.querySelectorAll(".fade-in");
    const sliders = document.querySelectorAll(".slide-in");
    const appearOptions = {
        threshold:0,
        rootMargin :"0px 0px -250px 0px"
    };
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
        entries.forEach(entry =>{
            if (!entry.isIntersecting){
                return;
            }else{
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    },appearOptions);
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
    sliders.forEach(slider => {
        appearOnScroll.observe(slider)
    });

    var today = new Date();
    var year = today.getFullYear();
    $(".dynamic-date").text(year);

    document.getElementById('clickable-text').addEventListener('click', function() {
    // Redirect to the desired link
    window.open('https://mess-management-system.onrender.com/', '_blank');
    });
    
    document.getElementById('project1').addEventListener('click', function() {
    window.open('https://github.com/tusharjain2802/Mess-Management-System', '_blank');
    });
    document.getElementById('project2').addEventListener('click', function() {
    window.open('https://github.com/tusharjain2802/Person-Counter', '_blank');
  });
  document.getElementById('project3').addEventListener('click', function() {
    window.open('https://github.com/tusharjain2802/Python_Computer_Vision_Projects/blob/main/live%20sketch%20project.py', '_blank');
  });

  document.getElementById('clickable-text1').addEventListener('click', function() {
    // Redirect to the desired link
    window.open('https://elitmus-clueup-puzzle-application.onrender.com/', '_blank');
    });
    
    document.getElementById('project4').addEventListener('click', function() {
    window.open('https://github.com/tusharjain2802/eLitmus-Clueup-Puzzle-Application', '_blank');
    });
    document.getElementById('project5').addEventListener('click', function() {
        window.open('https://github.com/tusharjain2802/Lava-Ballz-Game-Unity-2019.4.34f1', '_blank');
        });
    document.getElementById('project6').addEventListener('click', function() {
        window.open('https://github.com/tusharjain2802/Pizza-Delivery-App', '_blank');
    });
    document.getElementById('exp1').addEventListener('click', function() {
        window.open('https://drive.google.com/file/d/12YwkNpy1tHpX--xGywjffW7C4ZvucVly/view?usp=sharing', '_blank');
    });
    document.getElementById('exp2').addEventListener('click', function() {
        window.open('https://drive.google.com/file/d/11KWMGXHTQ0-fo08A5Bh8KtBoMozQOMFv/view?usp=sharing', '_blank');
    });
    document.getElementById('exp3').addEventListener('click', function() {
        window.open('https://drive.google.com/file/d/10OpA0u2qtUAC-htCnar12xOAUgkWvpsD/view?usp=sharing', '_blank');
    });
});