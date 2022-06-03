console.log('nigga');

const alertMessage = 'Этого сайта ещё не существует';

cardBtn[0].addEventListener('click', function () {
    alert(alertMessage);
});

cardBtn[1].addEventListener('click', function () {
    alert(alertMessage);
});

cardBtn[2].addEventListener('click', function () {
    alert(alertMessage);
});

navBtnAboutUs.addEventListener('click', function () {
    alert(alertMessage);
});

footerLinks[0].addEventListener('click', function () {
    window.scrollBy({
        top: -document.documentElement.scrollHeight,
        behavior: 'smooth'
    })
});

footerLinks[1].addEventListener('click', function () {
    window.scrollBy({
        top: -1080,
        behavior: 'smooth'
    })
});

footerLinks[2].addEventListener('click', function () {
    window.scrollBy({
        top: -550,
        behavior: 'smooth'
    })
});

footerLinks[3].addEventListener('click', function () {
    window.scrollBy({
        top: -100,
        behavior: 'smooth'
    })
});