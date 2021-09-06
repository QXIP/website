
    const observer = new IntersectionObserver( entries => {
    entries.forEach(entry => {
 
         let classes = Array.from(entry.target.classList)
        const square = entry.target.querySelector('.cover');
        const training = entry.target.querySelector('.training');
        const openS = entry.target.querySelector('.openS');
        const rocket = entry.target.querySelector('.rocket');
        const showUp = entry.target.querySelector('.showUp');
    
        if(entry.isIntersecting && square) {
         addClassL(square,'anim-cover')
          return; 
        } else if(entry.isIntersecting && training){
           addClassL(training,'anim-training')
            return;
        } else if(entry.isIntersecting && openS){
            addClassL(openS,'anim-openS')
          return;
        } else if(entry.isIntersecting && rocket){
           addClassL(rocket,'anim-rocket')
            return;
        }else if(entry.isIntersecting && showUp){
            addClassL(showUp,'anim-up');
            return;
        } else if (!entry.isIntersecting && square) {
            rmClass(square,'anim-cover')
        } else if(!entry.isIntersecting && training){
            rmClass(training,'anim-training')
        } else if(!entry.isIntersecting && openS){
            rmClass(openS,'anim-openS')
        } else if(!entry.isIntersecting && rocket) {
            rmClass(rocket, 'anim-rocket')
        } else if(!entry.isIntersecting && showUp) {
            rmClass(showUp,'anim-up')
        }
       
    });
});

const wrappers = [
    '.cover-wrapper',
    '.trainings-wrapper',
    '.open-source-wrapper',
    '.rocket-wrapper',
    '.learn-more'
];


function addClassL(el,cl) {
    el.classList.add(cl)
}

function rmClass(el,cl) {
    el.classList.remove(cl);
}
function init(){
    wrappers.forEach( w => {
        observer.observe(document.querySelector(w));
    })
}

init()

