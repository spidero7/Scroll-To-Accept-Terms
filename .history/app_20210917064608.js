const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');

function obCallBack(payload) {
    console.log(payload)
}

const ob = new IntersectionObserver(obCallBack);

ob
