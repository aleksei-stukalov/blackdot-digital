const heroShapes = [
  '#hero-shape-alpha',
  '#hero-shape-beta',
  '#hero-shape-zero',
];

let heroCurrentShape = 0;
function createAnimation(startingPathID) {
  return KUTE.to(
    startingPathID,
    { path: heroShapes[heroCurrentShape] },
    {
      duration: 6000,
      easing: 'easingCubicInOut',
      onComplete: () => {
        heroCurrentShape = (heroCurrentShape + 1) % heroShapes.length;
        createAnimation('#hero-shape').start();
      },
    }
  );
}

const heroShape = createAnimation('#hero-shape').start();

// Listener to check the hights of the vieport
// change of the css variable to represent vh

//Testing
// window.addEventListener('resize', () => {
//     // For mobile viewport we want to change CSS variable --vh to the real viewport height
//     let vh = window.innerHeight
//     document.documentElement.style.setProperty('--vh', vh + 'px');
//     document.querySelector('#hero>h1').innerText = vh
// })

/*
// Adding dots on the background of the hero section for desktop version
const heroSection = d.querySelector('#hero') // Referencing the HTML element
const heroWidth = heroSection.clientWidth
const heroHeight = heroSection.clientHeight
const heroDotSize = Math.floor(heroWidth * 0.05) // The size of the dot is 5% of the width of the viewport
// We want to place dots side by side the whole width and height of the hero section, and we want them to
// go over the edge if needed. It is a temprory solution, in the future we want to find a way to scale dots
// dynamically, so they are alway touching sides of the screen without being cut off.
const heroDotsHorisonal = Math.floor(heroWidth / heroDotSize) + 1
const heroDotsVertical = Math.floor(heroHeight / heroDotSize) + 1
const heroDotsCount = heroDotsHorisonal * heroDotsVertical // We want to create this many dots in a loop
// We need a container to hold our graphics, with its ID set to blackdot for the cool factor
const heroDotContainer = d.createElement('div')
heroDotContainer.id = 'blackdot'
// Lets fill up the container
for (let count = 0; count < 0; count++) {
    const dot = d.createElement('span')
    dot.classList = 'dot'
    //heroDotContainer.appendChild(dot)
}
//heroSection.appendChild(heroDotContainer)


console.log(heroWidth / heroDotSize)
*/
