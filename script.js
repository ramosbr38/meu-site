
function showDescription() {
    alert("Olá, eu sou Bruno Isael Schweitzer Ramos! Tenho 21 anos, sou natural de Bom Retiro do Sul e trabalho na Brasilata há 4 anos. Pratico corrida, ciclismo e musculação.");
}

const likeBtn = document.getElementById('likeBtn');
const dislikeBtn = document.getElementById('dislikeBtn');
const likeCountElement = document.getElementById('likeCount');
const dislikeCountElement = document.getElementById('dislikeCount');

let likeCount = 0;
let dislikeCount = 0;

likeBtn.addEventListener('click', () => {
    likeCount++;
    likeCountElement.textContent = likeCount;
});

dislikeBtn.addEventListener('click', () => {
    dislikeCount++;
    dislikeCountElement.textContent = dislikeCount;
});
