const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');

function obCallBack(payload) {
    if (payload[0].intersectionRatio === 1) {
        button.disabled = false;
        // stop observing the button
        
    }
}

const ob = new IntersectionObserver(obCallBack, {
    root: terms,
    threshold: 1,
});

ob.observe(terms.lastElementChild)
