document.addEventListener('DOMContentLoaded', function() {

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 90) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
});

});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('logoLink').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
