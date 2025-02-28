// initalizing scrolltrigger
gsap.registerPlugin('ScrollTrigger');


// Landding page Intro
let tl = gsap.timeline(); // made a timeline for the intro of the website

tl.from("nav", {
    duration: 0.8,
    y: -40,
    opacity: 0,
    ease: "power2.inOut",
})
tl.from(".text-container h1, .text-container p, .text-container button", {
    duration: 0.8,
    x: -40,
    opacity: 0,
    ease: "power2.inOut",
    stagger: 0.75
});
tl.from(".img-container", {
    duration: 0.8,
    x: 40,
    opacity: 0,
    ease: "power2.inOut",
    delay: '-0.75',
})


// Text container moves to the left
gsap.to(".text-container", {
    x: -200, // Adjust the amount to your preference
    scrollTrigger: {
        trigger: ".text-container",
        start: "90% 80%", 
        end: "bottom top",
        scrub: true, // This will make the animation smooth as you scroll
        markers: true
    }
});

// Img container moves to the right
gsap.to(".img-container", {
    x: 200, // Adjust the amount to your preference
    scrollTrigger: {
        trigger: ".img-container",
        start: "90% 80%", 
        end: "bottom top",
        scrub: true, // This will make the animation smooth as you scroll
        markers: true
    }
});


// Landing page end


// Overview section
// Overview section animation
gsap.from(".overview .card", {
    scrollTrigger: {
        trigger: ".overview", 
        start: "top 80%", 
        end: "bottom 50%", 
        toggleActions: "play none none none",
        markers: true
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    stagger: {
        amount: 1,
        from: "random"
    }
});

// Select all cards
const cards = document.querySelectorAll(".overview .card");

cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, {
            y: -10,
            scale: 1.025, 
            boxShadow: "0px 12px 20px rgba(0,0,0,0.2)", // Add depth
            duration: 0.3,
            ease: "power2.out"
        });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
            y: 0, 
            scale: 1,
            boxShadow: "0 8px 0 -6px rgba(0,0,0,0.2)", // Reset shadow
            duration: 0.3,
            ease: "power2.out"
        });
    });
});
// Overview section end


// Features section
// Features Section Animation
let ftl = gsap.timeline({
    scrollTrigger: {
        trigger: ".features",
        markers: true,
        start: "70% 80%",
        toggleActions: "play none none none",
    }
});

ftl.from(".phone-container img", {
    duration: 1,
    y: 100,
    rotate: 20,
    opacity: 0,
    ease: "power2.out"
});

ftl.from(".feature", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: {
        each: 0.2,
        from: "random"
    },
    ease: "power2.out"
});
// features end


// Wipe effect: image reveal from right to left
gsap.to(".divide img", {
    clipPath: "inset(0 0% 0 0)", // Reveal the image from right to left
    scrollTrigger: {
        trigger: ".divide",
        start: "top 80%", // Animation starts when the section is 80% visible
        end: "bottom 50%", // Ends before the section hits the top
        scrub: true, // Ensures smooth animation with scroll
        markers: true // For debugging
    },
});



// Download Section Animation
let downloadTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".download",
        start: "40% 80%",
        end: "bottom 50%",
        toggleActions: "play none none none",
        markers: true
    }
});

// Phone images animation
downloadTimeline.from(".download", {
    duration: 1,
    opacity: 0,
    y: 100, // Start from below
    ease: "power2.out",
});
downloadTimeline.from(".download .phone-section img", {
    duration: 1.25,
    opacity: 0,
    scale: 0.8,
    x: 100, // Start from below
    ease: "power2.out",
    stagger: {
        amount: 1, // Stagger time between images if there are multiple
        from: "start"
    }
});

// Text Section animation
downloadTimeline.from(".download .text-section", {
    duration: 1.2,
    opacity: 0,
    y: 50,
    ease: "power2.out",
    delay: "-1.5",
}, "-=0.5"); 
// down;oad end


// contact section
// Contact Section Animation
let contactTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".contacts",
        start: "70% 80%",
        end: "bottom 50%",
        toggleActions: "play none none none",
        markers: true
    }
});

// Contact header fade-in
contactTimeline.from(".contacts .contact-header h1", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power2.out"
});
contactTimeline.from(".contacts .contact-header p", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power2.out"
}, "-=0.5"); // Slight delay so both elements animate together

// Contact entry form slide-in and fade-in
contactTimeline.from(".contacts .contact-entry-box", {
    duration: 1.5,
    opacity: 0,
    y: 30,
    ease: "power2.out"
});

// Input fields fade-in with delay
contactTimeline.from(".contacts .contact-entry-box input", {
    duration: 0.8,
    opacity: 0,
    x: -30,
    stagger: 0.3, // Stagger delay for each input field
    ease: "power2.out"
}, "-=1");



