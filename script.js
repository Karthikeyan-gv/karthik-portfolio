const popup = document.getElementById("popup")
const close = document.getElementById("close")

document.addEventListener('keydown', (e) => {
    if (e.key === 'F12' || (e.ctrlKey && e.key === 'u') || (e.shiftKey && e.key === 'i')) {
        e.preventDefault();
    }
})

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    return false;
}, false)

setTimeout(() => {
    popup.classList.add('show')
}, 3000)