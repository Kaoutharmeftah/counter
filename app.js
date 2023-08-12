const plus = document.getElementById('btnPlus');
const moins = document.getElementById('btnMoins');
const nb = document.getElementById('number');

plus.addEventListener('click', () => {
    nb.innerHTML++;
});

moins.addEventListener('click', () => {
    let res = nb.innerHTML;
    console.log(res);
    if (res > 0) {
        nb.innerHTML--;
    } else {
        nb.innerHTML = 0;
    }
    
});