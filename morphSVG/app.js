const moonPath = "M14 27.5C14 42.6878 28 55.6515 28 55.6515C12.8122 55.6515 0.5 43.3393 0.5 28.1515C0.5 12.9636 12.8122 0.5 28 0.5C28 0.5 14 12.3122 14 27.5Z";

const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode = document.querySelector('#darkMode');

let toggle = false;

// we need to clik on the sun

darkMode.addEventListener("click", () => {
    // we need to use anime.js
    // here we setup the timeline
    const timeline = anime.timeline({
        duration: 750,
        easing: 'easeOutExpo'
    });
    // add animations to timeline
    timeline.add({
        targets: '.sun',
        d: [
            {value: toggle ? sunPath : moonPath}
        ]
    }).add({
        targets: '#darkMode',
        rotate: 320
    }, '-= 350').add({
        targets: 'section',
        backgroundColor: toggle ? 'rgb(255,255,255)' : 'rgb(22,22,22)' ,
        color: toggle ? 'rgb(22,22,22)' : 'rgb(255,255,255)'
    }, '-= 700');
    // everytime we click the sun switch toggle
    if(!toggle){
        toggle = true;
    } else {
        toggle = false;
    }
});