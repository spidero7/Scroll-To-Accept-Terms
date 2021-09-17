const terms = document.querySelector('.terms-and-conditions');
cosnt 

function obCallBack(payload) {
    if (payload[0].intersectionRatio === 1) {

    };
}

const ob = new IntersectionObserver(obCallBack, {
    root: terms,
    threshold: 1,
});

ob.observe(terms.lastElementChild)
