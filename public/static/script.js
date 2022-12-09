// Listener to check the hights of the vieport
// change of the css variable to represent vh


window.addEventListener('resize', () => {
    // For mobile viewport we want to change CSS variable --vh to the real viewport height
    let vh = window.innerHeight
    document.documentElement.style.setProperty('--vh', vh + 'px');
})