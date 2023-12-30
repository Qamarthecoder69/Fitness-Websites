let text = document.getElementById('text');
let l_side = document.getElementById('Left_side');
let r_side = document.getElementById('right_side');
let middle_1 = document.getElementById('in_middle_1');
let middle_2 = document.getElementById('in_middle_2');
let middle_3 = document.getElementById('in_middle_3');
let middle_4 = document.getElementById('in_middle_4');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    if (value < 1000) { 
        text.style.marginTop = value * 2.5 + 'px';
        l_side.style.left = value * -1.5 + 'px';
        middle_1.style.left = value * -0.7 + 'px';
        middle_2.style.left = value * -0.5 + 'px';
        middle_3.style.left = value * 0.5 + 'px';
        middle_4.style.left = value * 0.7 + 'px';
        r_side.style.left = value * 1.5 + 'px';
    }
});