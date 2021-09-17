const terms = document.querySelector('.terms-and-conditions');

function obCallBack(payload) {
    console.log(payload)
}

const ob = new IntersectionObserver(obCallBack);


