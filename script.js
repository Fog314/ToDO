let formInput = document.querySelector('input');
let checkmark = document.querySelectorAll('.checkmark');

function getStorageData() {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        $('.content').append('<div class = "output" id = "' + key + '_id"><label class="container" for = "' + key + '">' + localStorage.getItem(key) + '<input type="checkbox" id="' + key + '"><span class="checkmark" id="' + key + '"></span></label></div>');
    }
}

getStorageData();

$('.container').click((event) => {
    if (event.target.style.backgroundColor != '#2196F3') {
        localStorage.removeItem(event.target.getAttribute('id'));
        window.location.href = window.location.href;
    }
});


$('form').on('submit', (event) => {
    let keyLocal = Math.random();
    event.preventDefault();
    $('.content').append('<div class = "output" id = "' + keyLocal + '_id"><label class="container" for = "' + keyLocal + '">' + $('input').val() + '<input type="checkbox" id="' + keyLocal + '"><span class="checkmark" id="' + keyLocal + '"></span></label></div>');
    $('input').val('');
    localStorage.setItem(keyLocal, $('.container').last().text());

    keyLocal++;
    $('.container').click((event) => {
        if (event.target.style.backgroundColor != '#2196F3') {
            localStorage.removeItem(event.target.getAttribute('id'));
            window.location.href = window.location.href;
        }
    });
})