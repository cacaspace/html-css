window.addEventListener('scroll', function () {
    // var ok = this.document.querySelector('.bungkus');
    if (window.scrollY > 305) {
        this.document.querySelector('.sticky').classList.add('nav-fixed')
        // console.log('ok')
    } else if (window.scrollY < 305) {
        this.document.querySelector('.sticky').classList.remove('nav-fixed')

    }

    console.log(window.scrollY)
});