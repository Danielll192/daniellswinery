const bgdiv = document.getElementById('bottleContainer');
const chardonnay = document.getElementById('Chardonnay');
const cabSav = document.getElementById('CabSav');
const estateGold = document.getElementById('estateGold');

window.onload = () => {
    estateGold.classList.add('lefted');
    setTimeout(() => {
        chardonnay.classList.add('lefted');
    }, 500);
    setTimeout(() => {
        cabSav.classList.add('lefted');
    }, 1000);
};




document.querySelectorAll(".bottles").forEach(bottle => {
    bottle.addEventListener('click', () => {
        var bottleId = bottle.id;
        window.location.href = 'wines.html?scrollTo=' + bottleId;
        console.log(bottleId);
    })
});

