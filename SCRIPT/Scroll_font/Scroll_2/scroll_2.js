/* ------Great Horned Owl Sequence------  */
gsap.set(".circle", { yPercent: -5});
gsap.set(".dotsBlue", { yPercent: 10});
gsap.set(".owlHorned", { yPercent: -20});
gsap.set(".clusterGreat", { yPercent: 5});

gsap.to(".circle", {
  yPercent: 5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    scrub: 1
  }, 
});

gsap.to(".dotsBlue", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    scrub: 1
  }, 
});


gsap.to(".owlHorned", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    scrub: 1
  }, 
});

gsap.to(".caption", {
  yPercent: 100,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
  // markers:true,
    end: "bottom center",
    scrub: 1
  }, 
});

gsap.to(".clusterGreat", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    end: "bottom center",
    scrub: 1
  }, 
});



/* ------Burrowing Owl Sequence------  */
gsap.set(".triangle", { yPercent: 25, rotation:-90});
gsap.set(".dotsWhite", { yPercent: 10});
gsap.set(".owlBurrowing", { yPercent: -20});
gsap.set(".clusterBurrowing", { yPercent: 5});

gsap.to(".triangle", {
  yPercent: -5,
  rotation: 40,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
    scrub: 1
  }, 
});

gsap.to(".dotsWhite", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
    scrub: 1
  }, 
});


gsap.to(".owlBurrowing", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
    scrub: 1
  }, 
});

gsap.to(".captionBurrowing", {
  yPercent: 200,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
  // markers:true,
    end: "bottom center",
    scrub: 1
  }, 
});

gsap.to(".clusterBurrowing", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
  // markers:true,
    end: "bottom center",
    scrub: 1
  }, 
});


/*
gsap.set("#wrappie", {transformOrigin:"top left"});

function sizeAll() {
	var w = document.body.clientWidth;
  	console.log(w);
	if ( w < 960) {
     gsap.set("#wrappie",  {scale:w/100*.125}); 
		} 
}

window.onresize = sizeAll;

sizeAll();
*/

/*
const quotes = document.querySelectorAll(".title");

function setupSplits() {
  quotes.forEach(quote => {
    // Reset if needed
    if(quote.anim) {
      quote.anim.progress(1).kill();
      quote.childSplit.revert();
      quote.parentSplit.revert();
    }
    
    // Set up the splits
    quote.parentSplit = new SplitText(quote, {
      type: "lines",
      linesClass: "split-parent"
    });

    quote.childSplit = new SplitText(quote, { type: "lines" });

    // Set up the anim
    quote.anim = gsap.from(quote.childSplit.chars, {
      scrollTrigger: {
        trigger: quote,
        toggleActions: "restart pause resume reverse",
        start: "top 50%",
      },
      duration: 0.6, 
      ease: "circ.out", 
      y: 10,
      opacity:0,
      stagger: 0.02,
    });
  });
}

ScrollTrigger.addEventListener("refresh", setupSplits);
setupSplits();
*/


/* --- Split the text, Great Horned Owl --- */
var tlSplitGreat = gsap.timeline({onComplete: () => {SplitGreat.revert()}}), 
    SplitGreat = new SplitText(".titleGreathorned", {type:"words,chars"}), 
    chars = SplitGreat.chars;


tlSplitGreat.from(chars, {
  duration: 0.8,
  opacity:0,
  y:10,
  ease:"circ.out",
  stagger: 0.02,
}, "+=0");



/* --- Split the text, Burrowing Owl --- */
function setupSplits() {
  
var tlSplitBurrowing = gsap.timeline(), 
    SplitBurrowing = new SplitText(".titleBurrowing", {type:"words,chars"}), 
    chars = SplitBurrowing.chars; //an array of all the divs that wrap each character


tlSplitBurrowing.from(chars, {
  duration: 0.8,
  opacity:0,
  y:10,
  ease:"circ.out",
  stagger: 0.02,
scrollTrigger: {
    trigger: ".titleBurrowing",
//markers:true,
    start: "top 75%",
   end: "bottom center",
    scrub:1
  }
//,   onComplete: () => {SplitBurrowing.revert()}
}, "+=0");

// window.addEventListener('resize', function() {
  // SplitBurrowing.revert();
// });
  
};

/*
ScrollTrigger.addEventListener("scrollEnd", function() {
    SplitBurrowing.revert();
});
*/

ScrollTrigger.addEventListener("refresh", setupSplits);
//ScrollTrigger.addEventListener("scrollEnd", () => SplitBurrowing.revert());
setupSplits();


/*
// Alternate way of resizing the cluster elements since they are absolutely positioned
$(window).resize(function (){
if(window.matchMedia("(max-width: 500px)").matches){
    gsap.set(".clusterGreat", {scale: 0.2, transformOrigin: "center center"});
} else {
  gsap.set(".clusterGreat", {scale: 1, transformOrigin: "center center"});
          }
});
*/

