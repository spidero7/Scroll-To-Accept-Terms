const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');

function obCallBack(payload) {
    console.log(payload[0].intersectionRatio);
}

const ob = new IntersectionObserver(obCallBack, {
    
});

ob.observe(terms.lastElementChild)
