// const bodyClassList = document.querySelector('body').classList;

function fadeIn(element, duration) {
    if(element) {
        (function increment(value = 0) {
            element.style.opacity = String(value);
            if (element.style.opacity !== '1') {
                // bodyClassList.add('no-scroll')
                element.style.display = 'block';
                setTimeout(() => {
                    increment(value + 0.1);
                }, duration / 10);
            }
        })();
    }
    else return
};

function fadeOut(element, duration) {
    if(element) {
        (function decrement() {
            if((element.style.opacity -= 0.1) < 0) {
                element.style.display = 'none' 
                // bodyClassList.remove('no-scroll') 
            } else {
                setTimeout(() => {
                    decrement();
                }, duration / 10);
            }
        })();
    } else return
    
};

module.exports = {
    fadeOut,
    fadeIn
}