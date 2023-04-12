const bulb = document.getElementById('bulb');
const rightBlock = document.getElementById("right-block");

bulb.addEventListener('click', () => {
    rightBlock.style.backgroundColor = 'black';
});